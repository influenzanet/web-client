import React, { useRef } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { useMountEffect } from '../../../hooks';

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
  const containerRef = useRef<HTMLDivElement>(null);

  useMountEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  });

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
      {props.children}
    </Container>
  );
};

export default CenterPage;
