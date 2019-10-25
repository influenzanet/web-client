import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title} color="primary">
            Influenzanet
          </Typography>
          {/*
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
            */}
          <Button color="inherit"><Link to={"/login"} style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
          <Button color="inherit"><Link to={"/signup"} style={{ textDecoration: 'none', color: 'white' }}>Signup</Link></Button>


        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;


