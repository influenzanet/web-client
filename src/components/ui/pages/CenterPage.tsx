import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import FullHeightPage from './FullHeightPage';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
}));

const CenterPage: React.FC = (props) => {
  const classes = useStyles();

  return (
    <FullHeightPage>
      <Container className={classes.pageContainer} maxWidth="xs" >
        {props.children}
      </Container>
    </FullHeightPage>
  );
};

export default CenterPage;
