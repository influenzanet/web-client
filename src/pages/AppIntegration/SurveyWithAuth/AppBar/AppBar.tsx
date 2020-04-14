import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavigationState } from '../../../../store/navigation/types';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  let { path: rootPath } = useRouteMatch();

  const pageTitle = useSelector((state: { navigation: NavigationState }) => state.navigation.appBar.currentPageTitle)

  const showBackButton = (): boolean => {
    if (location.pathname.includes('survey/pages')) {
      const items = location.pathname.split('/');
      const index = parseInt(items[items.length - 1]);
      if (index > 0) {
        return true;
      }
    }
    return false;
  }


  return (
    <div className={classes.root}>
      <MuiAppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar style={{ padding: 0 }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="close"
            onClick={() =>
              history.goBack()
            }
          >
            {showBackButton() ? <ArrowBackIcon /> : null}

          </IconButton>
          <Box width="100%" textAlign="center" ml={showBackButton ? 0 : 3}>
            <Typography variant="h6" className={classes.title} color="primary">
              {pageTitle}
            </Typography>
          </Box>

          <IconButton
            edge="end"
            className={classes.menuButton}
            color="default"
            aria-label="close"
            onClick={() =>
              history.replace(`${rootPath}/close`)
            }
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </div >
  );
}


export default AppBar;


