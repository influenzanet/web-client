import React, { useRef, useEffect, Fragment } from 'react';
import { LinkRef } from '../../../components/common/link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import logo from '../../../assets/images/Influenzanet_Logo_RGB.png';
import Box from '@material-ui/core/Box';
import RoundedBox from '../../../components/ui/RoundedBox';
import FlexGrow from '../../../components/common/FlexGrow';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textContainer: {
    marginTop: theme.spacing(2),
  },
  formContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  logo: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: "white",
  },
  checkBox: {
    width: "100%",
  }
}));

const Signup: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
      <FlexGrow />
      <Box className={classes.logo} height="80px">
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <Typography variant="h3" color="primary">
        Sign Up
                </Typography>
      <RoundedBox classNames={[classes.textContainer]}>
        <Typography variant="body1" color="primary">
          Register now to support the global fight against the novel coronavirus and influenza-like-illnesses!
        </Typography>
      </RoundedBox>
      <RoundedBox classNames={[classes.formContainer]} >
        <form className={classes.form} noValidate>
          <Tooltip title="We need this so we can identify you.">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Tooltip>
          <Tooltip title="Don't make it too long!">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Tooltip>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            className={classes.checkBox}
            label={
              <Fragment><span>I have read and accept the </span> <Link variant="body1" component={LinkRef} to="/privacy">privacy statement</Link><span>.*</span></Fragment>
            }
          />
          <Tooltip title="If you want to, we will remind you via E-Mail when new surveys are available in your subscribed studies. We will also send you updates about the project every few weeks.">
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              className={classes.checkBox}
              label="I want to receive the newsletter and survey reminders."
            />
          </Tooltip>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            component={LinkRef} to="/home"
            className={classes.submit}
          >
            Sign Up
                    </Button>
          <Link variant="body2" component={LinkRef} to="/start/login" align="center">
            {"Already have an account? Sign in."}
          </Link>
        </form>
      </RoundedBox>
      <RoundedBox color={theme.palette.error.main}>
        <Typography variant="body1" color="inherit" className={classes.errorText}>
          Password too long.
        </Typography>
      </RoundedBox>
      <FlexGrow />
    </Container>
  );
}

export default Signup;
