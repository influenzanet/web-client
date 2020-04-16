import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem, ItemGroupComponent } from 'survey-engine/lib/data_types';
import { Slider, Typography, Box, makeStyles } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../../utils';

interface SliderCategoricalProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  thumb: {
    height: 17,
    width: 17,
    backgroundColor: '#fff',
    border: '4px solid currentColor',
    marginTop: -8,
    marginLeft: -9,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
  },
  mark: {
    height: 5,
    width: 2,
    marginTop: -2,
  },
  active: {},
});


const SliderCategorical: React.FC<SliderCategoricalProps> = (props) => {
  const classes = useStyles();

  const groupDef = (props.compDef as ItemGroupComponent);

  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number>(
    props.prefill && props.prefill.items && props.prefill.items.length > 0 ? groupDef.items.findIndex(item => {
      if (!props.prefill || !props.prefill.items) {
        return -1;
      }
      return item.key === props.prefill.items[0].key;
    }) : -1
  );

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleSliderChange = (key: string | undefined) => (event: any, newValue: number | number[]) => {
    if (!key) { return; }
    setTouched(true);
    const currentIndex = newValue as number;
    if (currentIndex < 0 || currentIndex >= groupDef.items.length) {
      return;
    }
    const currentSelection = groupDef.items[currentIndex];
    setSelectedIndex(currentIndex);

    setResponse(prev => {
      if (!currentSelection || !currentSelection.key) {
        return prev;
      }

      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [
            { key: currentSelection.key }
          ]
        }
      }
      return {
        ...prev,
        items: [
          { key: currentSelection.key }
        ]
      }
    })
  };


  const marks = groupDef.items.map((v, index) => {
    return {
      value: index,
      label: getLocaleStringTextByCode(v.content, props.languageCode)
    }
  });

  return (
    <Box>
      {props.compDef.content ?
        <Typography id="slider-numeric" gutterBottom>
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
        </Typography>
        : null}
      <Box px={5}>
        <Slider
          classes={{
            thumb: classes.thumb,
            mark: classes.mark,
          }}
          aria-labelledby={props.compDef.content ? "slider-numeric" : undefined}
          value={selectedIndex}
          onChange={handleSliderChange(props.compDef.key)}
          valueLabelDisplay="off"
          track={false}
          max={groupDef.items.length - 1}
          step={null}
          marks={marks}
          disabled={props.compDef.disabled !== undefined}
        />
      </Box>
    </Box>
  );
};

export default SliderCategorical;
