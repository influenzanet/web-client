import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { getLocaleStringTextByCode } from '../../utils';
import { TextField, Tooltip, Box, Typography } from '@material-ui/core';

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

  const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!event || !event.currentTarget) { return; }
    (event.currentTarget as HTMLInputElement).select();
  };

  const renderedInput = <TextField
    value={inputValue.toString()}
    margin="dense"
    variant="filled"
    type="number"
    style={{
      minWidth: 90,
      width: "100%",
    }}
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
    onFocus={handleFocus}
    onClick={(e) => (e.target as HTMLInputElement).select()}
    onChange={handleInputValueChange(props.compDef.key)}
    disabled={props.compDef.disabled !== undefined}
  ></TextField>;

  const content = getLocaleStringTextByCode(props.compDef.content, props.languageCode);
  const description = getLocaleStringTextByCode(props.compDef.description, props.languageCode);

  return <Box display="flex" alignItems="center">
    {content ?
      <Box mr={1} minWidth={80} flexShrink={1} >
        <Typography variant="body1">
          {content}
        </Typography>
      </Box>
      : null}
    {description ? <Tooltip title={description} arrow>
      {renderedInput}
    </Tooltip> : renderedInput}
  </Box>

};

export default NumberInput;
