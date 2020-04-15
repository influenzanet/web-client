import React from 'react';
import { Paper, makeStyles, Theme, createStyles } from '@material-ui/core';

interface RoundedBoxProps {
  style?: React.CSSProperties | undefined;
  color?: string | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    roundedBox: {
      borderRadius: 16,
      padding: 16,
    },
  }),
);

const RoundedBox: React.FC<RoundedBoxProps> = (props) => {
  const classes = useStyles();

  const getBackgroundColor = () => {
    if (props.color === undefined) return "white";
    else return props.color;
  }

  return (
    <Paper
      className={classes.roundedBox}
      elevation={0}
      style={{
        ...props.style,
        backgroundColor: getBackgroundColor(),
      }}
    >
      {props.children}
    </Paper>
  );
};

export default RoundedBox;
