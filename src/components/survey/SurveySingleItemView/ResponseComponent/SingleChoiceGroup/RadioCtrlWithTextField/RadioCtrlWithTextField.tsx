import React from 'react';
import { Box, TextField, FormControlLabel, Radio } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getLocaleStringTextByCode } from '../../../utils';
import { ItemComponent } from 'survey-engine/lib/data_types';

interface RadioCtrlWithTextFieldProps {
  compDef: ItemComponent;
  inputValue: string;
  languageCode: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputLabel: {
      width: "100%",
    }
  }),
);

const RadioCtrlWithTextField: React.FC<RadioCtrlWithTextFieldProps> = (props) => {
  const classes = useStyles();

  const label = <Box display="flex" height="100%" alignItems="center" width="100%">
    {
      props.compDef.content ? <Box mr={1}>
        {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
      </Box> : null}
    <Box flexGrow={1}>
      <TextField
        fullWidth
        value={props.inputValue}
        variant="outlined"
        margin="dense"
        label={getLocaleStringTextByCode(props.compDef.description, props.languageCode)}
        InputLabelProps={{ shrink: true }}
        onChange={props.onInputChange}
        disabled={props.compDef.disabled !== undefined}
      ></TextField>
    </Box>
  </Box>;

  return <FormControlLabel
    classes={{ label: classes.inputLabel }}
    key={props.compDef.key}
    value={props.compDef.key}
    control={<Radio />}
    label={label}
    disabled={props.compDef.disabled !== undefined}
  />;
};

export default RadioCtrlWithTextField;
