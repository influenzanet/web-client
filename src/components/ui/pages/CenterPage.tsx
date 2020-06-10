import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import FullHeightPage from './FullHeightPage';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100%",
  },
}));

interface CenterPageProps {
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
}

const CenterPage: React.FC<CenterPageProps> = (props) => {
  const classes = useStyles();

  let maxWidth = props.maxWidth ?? "xs";

  return (
    <FullHeightPage>
      <Container className={classes.pageContainer} maxWidth={maxWidth} >
        {props.children}
      </Container>
    </FullHeightPage>
  );
};

export default CenterPage;
