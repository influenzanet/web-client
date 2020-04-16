import React from 'react';
import { Button } from '@material-ui/core';

interface RoundedButtonProps {
  color?: "primary" | "secondary";
  className?: string | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  return (
    <Button
      disableElevation={true}
      style={{
        borderRadius: 1000,
        textTransform: "none",
      }}
      variant="contained"
      color={props.color}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default RoundedButton;
