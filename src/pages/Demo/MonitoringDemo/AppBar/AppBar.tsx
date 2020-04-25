import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, useScrollTrigger } from '@material-ui/core';

interface AppBarProps {
  openNavbar: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
    zIndex: theme.zIndex.drawer + 1,
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

const AppBar: React.FC<AppBarProps> = (props) => {
  const classes = useStyles();
  const scrollTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <div className={classes.root}>
      <MuiAppBar className={classes.appBar} elevation={(scrollTriggered) ? 4 : 0}>
        <Toolbar style={{ padding: 0 }}>
          <Box px={2}>
            <Typography variant="h6" className={classes.title} color="secondary">
              Influenzanet
            </Typography>
          </Box>
          <Box width="100%" textAlign="center">
            <Typography variant="h6" className={classes.title} color="primary">
              Monitoring System
            </Typography>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <div className={classes.appBarSpacer} />
    </div >
  );
};

export default AppBar;
