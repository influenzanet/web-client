import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton, useScrollTrigger } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';


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
  appBarSpacer: theme.mixins.toolbar,
}));

const AppBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  let { path: rootPath } = useRouteMatch();

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


  const scrollTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <div className={classes.root}>
      <MuiAppBar className={classes.appBar} elevation={(scrollTriggered) ? 4 : 0}>
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
              COVID-19 participatory study
            </Typography>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <div className={classes.appBarSpacer} />
    </div >
  );
};

export default AppBar;
