import React from 'react';

import logo from './logo.png';
import { Box, Container, Typography } from '@material-ui/core';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import { useLocation, useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Container maxWidth="md">
      <Box textAlign="center" m={6}>
        <Typography variant="h6" color="secondary">
          {'Registration Successful'}
        </Typography>
      </Box>
      <Box textAlign="center" m={4}>
        <img src={logo} alt="Logo" width={200} />
      </Box>
      <Box textAlign="center" m={6}>
        <Typography variant="h5" color="primary">
          {'Thank you for joining our'}
        </Typography>
        <Typography variant="h5" color="primary" style={{ fontWeight: 'bold' }}>
          {'25342 volunteers,'}
        </Typography>
        <Typography variant="h5" color="primary">
          {'your contribution will count.'}
        </Typography>
      </Box>
      <Box textAlign="center" mt={8}>
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
    </Container>
  );
};

export default Landing;
