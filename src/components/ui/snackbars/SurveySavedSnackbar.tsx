import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { navigationActions } from '../../../store/navigation/navigationSlice';
import { useTranslation } from 'react-i18next';

const SurveySavedSnackbar: React.FC = () => {
  const open = useSelector((state: RootState) => state.navigation.snackbars.surveySavedOpen);
  const dispatch = useDispatch();

  const { t } = useTranslation(['app']);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(navigationActions.closeSurveySavedSnackbar());
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
        {t("app:snackbars.surveySavedMessage")}
      </MuiAlert>
    </Snackbar>
  );
};

export default SurveySavedSnackbar;
