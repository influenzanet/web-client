import React from 'react';
import { Button } from '@material-ui/core';

interface PrimaryButtonProps {
  className?: string | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Button
      disableElevation={true}
      style={{
        borderRadius: 1000,
        textTransform: "none",
      }}
      variant="contained"
      color="primary"
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
