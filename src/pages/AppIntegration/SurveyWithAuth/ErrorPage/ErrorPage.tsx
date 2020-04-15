import React from 'react';
import { useHistory } from 'react-router-dom';
import PrimaryButton from '../../../../components/ui/buttons/PrimaryButton';


const ErrorPage: React.FC = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <PrimaryButton
        onClick={() => history.goBack()}
      >
        Retry
      </PrimaryButton>
    </React.Fragment>
  );
};

export default ErrorPage;
