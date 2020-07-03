import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

interface VerificationCodeFormProps {
  onSubmit: (code: string) => void;
}

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const VerificationCodeForm: React.FC<VerificationCodeFormProps> = (props) => {
  const classes = useStyles();

  const [verificationCode, setVerificationCode] = useState("");
  const { t } = useTranslation(['app']);

  const handleVerificationCodeChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVerificationCode(event.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(verificationCode);
  }

  const submitButtonEnabled = () => {
    return verificationCode.length === 6;
  }

  return (
    <React.Fragment>
      <Typography variant="h5" color="primary">
        {t("app:loginPage.title")}
      </Typography>

      <Typography variant="body1" color="primary">
        {t("app:loginPage.message")}
      </Typography>

      <form className={classes.form} onSubmit={onSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="verificationCode"
          label={t("app:loginPage.verificationCodePlaceholder")}
          name="verificationCode"
          autoComplete="verificationCode"
          autoFocus
          value={verificationCode}
          onChange={handleVerificationCodeChange}
        />
        <Button
          type="button"
          fullWidth
          color="primary"
        >
          {"Get a new code?"}
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!submitButtonEnabled()}
        >
          {t("app:loginPage.loginButtonLabel")}
        </Button>
      </form>
    </React.Fragment>
  );
};

export default VerificationCodeForm;
