import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface LanguageSelectorProps {
  selected: string;
  availableLanguages: Array<{ code: string, label: string }>;
  onChange: (code: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
    },
  }),
);

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.onChange(event.target.value as string);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="language-select-label"
        id="language-select"
        color="primary"
        value={props.selected}
        onChange={handleChange}
      >
        {
          props.availableLanguages.map(item =>
            <MenuItem key={item.code} value={item.code}>
              {item.label}
            </MenuItem>)
        }
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
