import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import RoundedBox from '../../../components/ui/RoundedBox';

interface OnboardingErrorProps {
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

const OnboardingError: React.FC<OnboardingErrorProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation(['app']);

  let localizedError = "";

  switch (props.errorString) {
    case "email not valid":
      localizedError = t("app:onboardingErrors.invalidEmail");
      break;
    case "password too weak":
      localizedError = t("app:onboardingErrors.weakPassword");
      break;
    case "invalid username and/or password":
      localizedError = t("app:onboardingErrors.incorrectCredentials");
      break;
    default:
      localizedError = t("app:onboardingErrors.unknownError") + "\n" + props.errorString;
  }

  return (
    <RoundedBox classNames={[classes.errorContainer]} color={theme.palette.error.main}>
      <Typography variant="body1" color="inherit" className={classes.errorText}>
        {localizedError}
      </Typography>
    </RoundedBox>
  );
};

export default OnboardingError;
