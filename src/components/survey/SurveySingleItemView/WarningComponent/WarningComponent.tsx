import React from 'react';
import { ItemComponent } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../utils';

interface WarningComponentProps {
  compDef: ItemComponent;
  languageCode: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    warning: {
      color: "#ffce00",
      fontWeight: "bold"
    },
  }),
);

const WarningComponent: React.FC<WarningComponentProps> = (props) => {
  const classes = useStyles();
  return (
    <FormHelperText
      className={classes.warning}>
      {getLocaleStringTextByCode(props.compDef, props.languageCode)}
    </FormHelperText>
  );
};

export default WarningComponent;
