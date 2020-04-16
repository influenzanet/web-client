import React from 'react';
import { useHistory } from 'react-router-dom';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';


const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <RoundedButton
        color="primary"
        onClick={() => history.goBack()}
      >
        Retry
      </RoundedButton>
    </React.Fragment>
  );
};

export default ErrorPage;
