import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useRouteMatch } from 'react-router';



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

export const AppBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  let { path: rootPath } = useRouteMatch();

  return (
    <div className={classes.root}>
      <MuiAppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar style={{ padding: 0 }}>
          <Box width="100%" textAlign="center" px={2} ml={2}>
            <Typography variant="h6" className={classes.title} color="primary">
              {'Name der Umfrage'}
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


