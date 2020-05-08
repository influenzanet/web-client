import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { Slider, Typography, Box } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../../utils';

interface SliderNumericProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const SliderNumeric: React.FC<SliderNumericProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<number>(
    props.prefill && props.prefill.value ? parseFloat(props.prefill.value) : 0
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

    setInputValue(newValue as number);

    setResponse(prev => {
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          dtype: 'number',
          value: newValue.toString()
        }
      }
      return {
        ...prev,
        dtype: 'number',
        value: newValue.toString()
      }
    })
  };

  const marks = () => {
    if (props.compDef.style) {
      const labels = props.compDef.style.find(st => st.key === 'step-labels');
      if (labels && labels.value === "true") {
        if (props.compDef.properties?.min && props.compDef.properties?.max && props.compDef.properties?.stepSize) {
          const min = props.compDef.properties?.min as number;
          const max = props.compDef.properties?.max as number;
          const stepSize = props.compDef.properties?.stepSize as number;

          const marks = [];

          for (let i = min; i <= max; i += stepSize) {
            marks.push({
              value: i,
              label: i.toString()
            });
          }

          return marks;
        }
      }
    }

    return props.compDef.properties?.stepSize ? true : false;
  };


  return (
    <React.Fragment>
      {props.compDef.content ?
        <Typography id="slider-numeric" gutterBottom>
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
        </Typography>
        : null}
      <Box p={1}>
        <Slider
          color="secondary"
          aria-labelledby={props.compDef.content ? "slider-numeric" : undefined}
          value={typeof inputValue === 'number' ? inputValue : 0}
          onChange={handleSliderChange(props.compDef.key)}
          valueLabelDisplay="auto"
          min={props.compDef.properties?.min as number}
          max={props.compDef.properties?.max as number}
          step={props.compDef.properties?.stepSize as number}
          marks={marks()}
          disabled={props.compDef.disabled !== undefined}
        />
      </Box>
    </React.Fragment>
  );
};

export default SliderNumeric;
