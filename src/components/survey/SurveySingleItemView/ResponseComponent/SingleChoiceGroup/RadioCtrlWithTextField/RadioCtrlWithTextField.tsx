import React from 'react';
import { Box, TextField, FormControlLabel, Radio } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../../../utils';
import { ItemComponent } from 'survey-engine/lib/data_types';

interface RadioCtrlWithTextFieldProps {
  compDef: ItemComponent;
  inputValue: string;
  languageCode: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioCtrlWithTextField: React.FC<RadioCtrlWithTextFieldProps> = (props) => {
  const label = <Box display="flex" height="100%" alignItems="center" width="100%">
    <Box mr={1}>
      {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
    </Box>
    <Box flexGrow={1}>
      <TextField
        fullWidth
        value={props.inputValue}
        margin="dense"
        onChange={props.onInputChange}
      ></TextField>
    </Box>
  </Box>;

  return <FormControlLabel
    key={props.compDef.key}
    value={props.compDef.key}
    control={<Radio />}
    label={label}
    disabled={props.compDef.disabled !== undefined}
  />;
};

export default RadioCtrlWithTextField;
