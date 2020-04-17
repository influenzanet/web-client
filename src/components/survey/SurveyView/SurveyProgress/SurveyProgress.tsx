import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import clsx from 'clsx';

interface SurveyProgressProps {
  currentIndex: number;
  totalCount: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      height: 5,
      justifyContent: 'center'
    },
    item: {
      backgroundColor: '#ccc',
      borderRadius: 5,
      margin: 3,
      height: "100%",
      flexGrow: 1,
      maxWidth: 40,
    },
    itemActive: {
      backgroundColor: theme.palette.primary.main,
    }
  }),
);

const SurveyProgress: React.FC<SurveyProgressProps> = (props) => {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      {
        Array.from(Array(props.totalCount).keys()).map(
          index => (
            <div
              key={index.toString()}
              className={
                clsx(classes.item, {
                  [classes.itemActive]: index <= props.currentIndex
                })}>
            </div>
          )
        )
      }
    </div>


  );
};

export default SurveyProgress;
