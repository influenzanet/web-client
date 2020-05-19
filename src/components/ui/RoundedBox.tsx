import React from 'react';
import { Paper, makeStyles, Theme, createStyles } from '@material-ui/core';

interface RoundedBoxProps {
  style?: React.CSSProperties | undefined;
  classNames?: string[] | undefined;
  color?: string | undefined;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

const RoundedBox: React.FC<RoundedBoxProps> = (props) => {
  const getBackgroundColor = () => {
    if (props.color === undefined) return "white";
    else return props.color;
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      roundedBox: {
        borderRadius: 16,
        padding: 16,
        backgroundColor: getBackgroundColor(),
      },
    }),
  );

  const classes = useStyles();

  let classNames = (props.classNames) ? props.classNames : [];

  return (
    <Paper
      className={[classes.roundedBox, ...classNames].join(" ")}
      elevation={0}
      style={{
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Paper>
  );
};

export default RoundedBox;
