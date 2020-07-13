import React, { useState } from 'react';
import { Typography, TextField, Button, FormControlLabel, Checkbox, Grid, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  rememberMeDefault?: boolean;
  onLinkClicked: (name: string) => void;
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
  remmemberText: {
    userSelect: "none",
  }
}));

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation(['app']);

  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");
  let [rememberMe, setRememberMe] = useState(props.rememberMeDefault ? props.rememberMeDefault : false);


  const handleEmailAdressChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailAddress(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  }

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setRememberMe(checked);
  }

  const loginButtonEnabled = () => {
    return emailAddress.length > 0 && password.length > 0;
  }

  const onClickLink = (name: string) => (e: any) => {
    e.preventDefault();
    props.onLinkClicked(name);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(emailAddress, password, rememberMe);
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
          id="email"
          label={t("app:loginPage.emailPlaceholder")}
          name="email"
          autoComplete="email"
          autoFocus
          value={emailAddress}
          onChange={handleEmailAdressChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label={t("app:loginPage.passwordPlaceholder")}
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox checked={rememberMe} value={rememberMe} onChange={handleRememberMeChange} color="primary" />}
          className={classes.remmemberText}
          label={t("app:loginPage.rememberMeLabel")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!loginButtonEnabled()}
        >
          {t("app:loginPage.loginButtonLabel")}
        </Button>
        <Grid container>
          <Grid item xs>
            {/*
            <Link variant="body2"
              component="button"
              onClick={onClickLink("password-forgotten")}
              //component={LinkRef} to={}
            >
              {t("app:loginPage.forgotPasswordLink")}
            </Link>
            */}
          </Grid>
          <Grid item>
            <Link variant="body2"
              component="button"
              onClick={onClickLink("signup")}
            >
              {t("app:loginPage.signupLink")}
            </Link>
          </Grid>
        </Grid>
      </form>

    </React.Fragment>
  );
};

export default LoginForm;

