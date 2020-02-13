import React from 'react';
import { ItemComponent } from 'survey-engine/lib/data_types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FormHelperText } from '@material-ui/core';
import { getLocaleStringTextByCode } from '../utils';

interface ErrorComponentProps {
  compDef: ItemComponent;
  languageCode: string;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    error: {
      color: "#ff2300",
      fontWeight: "bold"
    },
  }),
);

const ErrorComponent: React.FC<ErrorComponentProps> = (props) => {
  const classes = useStyles();
  return (
    <FormHelperText
      className={classes.error}>
      {getLocaleStringTextByCode(props.compDef, props.languageCode)}
    </FormHelperText>
  );
};

export default ErrorComponent;
