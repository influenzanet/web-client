import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { TextField } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../utils';

interface TextInputProps {
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    props.prefill && props.prefill.value ? props.prefill.value : ''
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
          value: value
        }
      }
      return {
        ...prev,
        value: value
      }
    })
  };


  return (
    <TextField
      fullWidth
      placeholder={getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
      value={inputValue}
      margin="dense"
      variant="filled"
      inputProps={{
        style: {
          padding: "8px 16px",
        },
        maxLength: 4000,
      }}
      InputProps={{
        disableUnderline: true,
        style: {
          borderRadius: 1000,
        }
      }}
      onChange={handleInputValueChange(props.compDef.key)}
      disabled={props.compDef.disabled !== undefined}
    ></TextField>
  );
};

export default TextInput;
