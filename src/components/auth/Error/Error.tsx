import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import RoundedBox from '../../ui/RoundedBox';

interface ErrorProps {
  errorString: string,
}

const useStyles = makeStyles(theme => ({
  errorContainer: {
    marginBottom: theme.spacing(1),
  },
  errorText: {
    color: "white",
    whiteSpace: "pre-line",
  },
}));

const Error: React.FC<ErrorProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation(['app']);

  let localizedError = "";

  switch (props.errorString) {
    case "email not valid":
      localizedError = t("app:errors.invalidEmail");
      break;
    case "password too weak":
      localizedError = t("app:errors.weakPassword");
      break;
    case "invalid username and/or password":
      localizedError = t("app:errors.incorrectCredentials");
      break;
    case "new password too weak":
      localizedError = t("app:errors.newPasswordTooWeak");
      break;
    case "invalid user and/or password":
      localizedError = t("app:errors.currentPasswordWrong");
      break;
    default:
      localizedError = t("app:errors.unknownError") + "\n" + props.errorString;
  }

  return (
    <RoundedBox classNames={[classes.errorContainer]} color={theme.palette.error.main}>
      <Typography variant="body1" color="inherit" className={classes.errorText}>
        {localizedError}
      </Typography>
    </RoundedBox>
  );
};

export default Error;
