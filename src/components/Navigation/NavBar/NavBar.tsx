import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { navigationActions } from '../../../store/navigation/navigationSlice';
import { RootState } from '../../../store';
import { useHistory } from 'react-router';



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
  const history = useHistory();

  const pageTitle = useSelector((state: RootState) => state.navigation.appBar.currentPageTitle);
  const showBackButton = useSelector((state: RootState) => state.navigation.appBar.showBackBtn);
  const dispatch = useDispatch();

  const backButton = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        // color="secondary"
        aria-label="close"
        onClick={() =>
          history.goBack()
        }
      >
        <ArrowBackIcon />
      </IconButton>
    );
  }

  const drawerButton = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="secondary"
        aria-label="menu"
        onClick={() => dispatch(navigationActions.openNavigationDrawer())}
      >
        <MenuIcon />
      </IconButton>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar >
          {drawerButton()}
          {
            (showBackButton)
              ? backButton()
              : null
          }
          <Typography variant="h6" className={classes.title} color="primary">
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;


