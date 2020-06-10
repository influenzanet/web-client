import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface ConfirmationDialogProps {
  title: string,
  description: string,
  open: boolean,
  onConfirmed: () => void,
  onCancelled: () => void,
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (props) => {
  const { t } = useTranslation(['app']);

  return (
    <Dialog
      open={props.open}
      onClose={props.onCancelled}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancelled} color="primary" autoFocus>
          {t("app:buttons.cancel")}
        </Button>
        <Button onClick={props.onConfirmed} color="secondary">
          {t("app:buttons.confirm")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
