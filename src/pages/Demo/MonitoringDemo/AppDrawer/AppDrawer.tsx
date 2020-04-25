import React from 'react';
import { Drawer, Toolbar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface AppDrawerProps {
}


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      background: '#efefef',
    },
    drawerContainer: {
      overflow: 'auto',
    },
  }),
);

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        Test
      </div>
    </Drawer>
  );
};

export default AppDrawer;
