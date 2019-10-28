import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from "react-router-dom";
import { OPEN_NAVIGATION_DRAWER } from '../../../../store/actions/actionTypes';
import { NavigationState } from '../../../../store/reducers/navigation';



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

  const pageTitle = useSelector((state: {navigation: NavigationState}) => state.navigation.currentPageTitle)
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar >
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            onClick={() => dispatch({ type: OPEN_NAVIGATION_DRAWER })}
            >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title} color="primary">
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;


