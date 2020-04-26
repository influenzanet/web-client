import React, { useRef, useEffect } from 'react';

import logo from './logo.png';
import { Box, Container, Typography } from '@material-ui/core';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import { useLocation, useHistory } from 'react-router-dom';
import FlexGrow from '../../../../components/common/FlexGrow';

const Landing: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  });

  return (
    <Container ref={containerRef} style={{ display: "flex", flexDirection: "column" }} maxWidth="md">
      <FlexGrow />
      <Box textAlign="center" m={4}>
        <Typography variant="h4" color="secondary">
          {'Registration Successful'}
        </Typography>
      </Box>
      <FlexGrow />
      <Box textAlign="center" m={2}>
        <img src={logo} alt="Logo" width={200} />
      </Box>
      <Box textAlign="center" m={6}>
        <Typography variant="h5" color="primary">
          {'Thank you for joining our'}
        </Typography>
        <Typography variant="h5" color="primary" style={{ fontWeight: 'bold' }}>
          {'25342 volunteers.'}
        </Typography>
        <Typography variant="h5" color="primary">
          {'Your contribution will count!'}
        </Typography>
      </Box>
      <FlexGrow />
      <Box textAlign="center" m={2}>
        <Typography variant="h6" color="secondary">
          {'You have one new survey assigned:'}
        </Typography>
        <Box textAlign="center" p={1}>
          <RoundedButton
            color="primary"
            onClick={
              () => {
                alert("In this demo, your answers won't be recorded.")
                const url = location.pathname.slice(0, location.pathname.lastIndexOf('/') + 1) + 'survey';
                history.replace(url);

              }
            }>
            Take me to the survey
        </RoundedButton>
        </Box>
      </Box>
      <FlexGrow />
      <FlexGrow />
      <FlexGrow />
    </Container>
  );
};

export default Landing;
