import React from 'react';
import { Dialog, CircularProgress } from '@material-ui/core';

interface LoadingDialogProps {
  open: boolean;
}

const LoadingDialog: React.FC<LoadingDialogProps> = (props) => {
  return (
    <Dialog open={props.open}>
      <CircularProgress style={{ padding: 32 }} />
    </Dialog>
  );
};

export default LoadingDialog;
