import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { Typography, Slider } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../../utils';

interface SliderNumericRangeProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const applyPrefill = (pValues: undefined | ResponseItem): number[] => {
  if (!pValues || !pValues.items || pValues.items.length !== 2) {
    return [0, 0];
  }
  const start = pValues.items.find(pv => pv.key === 'start')
  const end = pValues.items.find(pv => pv.key === 'end')
  return [start && start.value ? parseFloat(start.value) : 0, end && end.value ? parseFloat(end.value) : 0];
}

const SliderNumericRange: React.FC<SliderNumericRangeProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValues, setInputValues] = useState<number[]>(
    applyPrefill(props.prefill)
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

    setInputValues(newValue as number[]);

    setResponse(prev => {
      newValue = newValue as number[];
      if (newValue.length !== 2) {
        console.error("unexpected number of values received from slider value change");
        return;
      }
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [
            { key: 'start', dtype: 'number', value: newValue[0].toString() },
            { key: 'end', dtype: 'number', value: newValue[1].toString() }
          ]
        }
      }
      return {
        ...prev,
        items: [
          { key: 'start', dtype: 'number', value: newValue[0].toString() },
          { key: 'end', dtype: 'number', value: newValue[1].toString() }
        ]
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
        color="secondary"
        aria-labelledby={props.compDef.content ? "slider-numeric" : undefined}
        value={inputValues}
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

export default SliderNumericRange;
