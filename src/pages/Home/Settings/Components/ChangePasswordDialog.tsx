import React, { useState, ChangeEvent } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useAsyncCall } from '../../../../hooks';
import LoadingDialog from '../../../../components/ui/dialogs/LoadingDialog';
import { changePasswordReq } from '../../../../api/user-management-api';
import Error from '../../../../components/auth/Error/Error';
import { useDispatch } from 'react-redux';
import { navigationActions } from '../../../../store/navigation/navigationSlice';

interface ChangePasswordDialogProps {
  open: boolean,
  onClosed: () => void,
}

const ChangePasswordDialog: React.FC<ChangePasswordDialogProps> = (props) => {
  const { t } = useTranslation(['app']);

  const [loading, asyncCall] = useAsyncCall();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();


  const onChangePasswordClicked = () => {
    setErrorMessage(undefined);

    asyncCall(async () => {
      const response = await changePasswordReq(currentPassword, newPassword);

      if (response.status === 200) {
        dispatch(navigationActions.openPasswordChangedSnackbar());
        props.onClosed();
      }
    },
      (e) => {
        if (e.response && e.response.data && e.response.data.error) {
          setErrorMessage(e.response.data.error);
        }
      }
    );
  }

  const handleCurrentPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCurrentPassword(event.target.value);
  }

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPassword(event.target.value);
  }

  const handleConfirmNewPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmNewPassword(event.target.value);
  }

  const confirmButtonEnabled = () => {
    return currentPassword.length > 0 && newPassword.length > 0 && newPassword === confirmNewPassword;
  }


  return (
    <Dialog
      open={props.open}
      onClose={props.onClosed}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{t("app:settingsPage.changePasswordDialog.title")}</DialogTitle>
      <DialogContent>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("app:settingsPage.changePasswordDialog.currentPasswordPlaceholder")}
          type="password"
          id="password"
          autoComplete="current-password"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("app:settingsPage.changePasswordDialog.newPasswordPlaceholder")}
          type="password"
          id="password"
          autoComplete="new-password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("app:settingsPage.changePasswordDialog.confirmNewPasswordPlaceholder")}
          type="password"
          id="password"
          autoComplete="new-password"
          value={confirmNewPassword}
          onChange={handleConfirmNewPasswordChange}
        />
        {errorMessage
          ? <Error errorString={errorMessage} />
          : null
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClosed} color="secondary">
          {t("app:buttons.cancel")}
        </Button>
        <Button onClick={onChangePasswordClicked} color="primary" autoFocus disabled={!confirmButtonEnabled()}>
          {t("app:buttons.confirm")}
        </Button>
      </DialogActions>
      <LoadingDialog open={loading} />
    </Dialog>
  );
};

export default ChangePasswordDialog;
