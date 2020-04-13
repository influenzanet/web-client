import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Button
        onClick={() => history.goBack()}
      >
        Retry
      </Button>
    </React.Fragment>
  );
};

export default ErrorPage;
