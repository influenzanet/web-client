import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { getLocaleStringTextByCode } from '../../utils';
import { TextField, Tooltip } from '@material-ui/core';

interface NumberInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    props.prefill && props.prefill.value ? parseFloat(props.prefill.value).toString() : '0'
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


  const handleInputValueChange = (key: string | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!key) { return; }
    setTouched(true);

    const value = (event.target as HTMLInputElement).value;
    setInputValue(value);
    setResponse(prev => {
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          dtype: 'number',
          value: value.toString()
        }
      }
      return {
        ...prev,
        dtype: 'number',
        value: value.toString()
      }
    })
  };

  let renderedInput = <TextField
    value={inputValue.toString()}
    margin="dense"
    variant="filled"
    type="number"
    inputProps={{
      style: {
        padding: "8px 16px",
      },
      min: props.compDef.properties?.min,
      max: props.compDef.properties?.max,
      step: props.compDef.properties?.stepSize,
    }}
    InputProps={{
      disableUnderline: true,
      style: {
        borderRadius: 1000,
      },
    }}
    onChange={handleInputValueChange(props.compDef.key)}
    disabled={props.compDef.disabled !== undefined}
  ></TextField>;

  let content = getLocaleStringTextByCode(props.compDef.content, props.languageCode);

  if (content) {
    return <Tooltip title={content} arrow>
      {renderedInput}
    </Tooltip>
  } else {
    return renderedInput;
  }
};

export default NumberInput;
