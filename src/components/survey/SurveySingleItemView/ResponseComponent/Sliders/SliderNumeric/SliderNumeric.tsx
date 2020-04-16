import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { Slider, Typography } from '@material-ui/core';
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
          value: newValue.toString()
        }
      }
      return {
        ...prev,
        value: newValue.toString()
      }
    })
  };


  return (
    <React.Fragment>
      {props.compDef.content ?
        <Typography id="slider-numeric" gutterBottom>
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
        </Typography>
        : null}
      <Slider
        aria-labelledby={props.compDef.content ? "slider-numeric" : undefined}
        value={typeof inputValue === 'number' ? inputValue : 0}
        onChange={handleSliderChange(props.compDef.key)}
        valueLabelDisplay="auto"
        min={props.compDef.properties?.min as number}
        max={props.compDef.properties?.max as number}
        step={props.compDef.properties?.stepSize as number}
        marks={props.compDef.properties?.stepSize ? true : false}
        disabled={props.compDef.disabled !== undefined}
      />
    </React.Fragment>
  );
};

export default SliderNumeric;
