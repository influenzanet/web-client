import React, { Fragment } from 'react';
import SurveySavedSnackbar from './SurveySavedSnackbar';
import PasswordChangedSnackbar from './PasswordChangedSnackbar';

const Snackbars: React.FC = () => {
  return (
    <Fragment>
      <SurveySavedSnackbar />
      <PasswordChangedSnackbar />
    </Fragment>
  );
};

export default Snackbars;
