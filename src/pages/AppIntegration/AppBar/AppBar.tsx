import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';



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

  return (
    <div className={classes.root}>
      <MuiAppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Box width="100%" textAlign="center">
            <Typography variant="h6" className={classes.title} color="primary">
              {'Name der Umfrage'}
            </Typography>
          </Box>





        </Toolbar>
      </MuiAppBar>
    </div>
  );
}


export default AppBar;


