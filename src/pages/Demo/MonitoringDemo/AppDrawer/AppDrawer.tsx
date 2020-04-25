import React from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemText, Divider, Tooltip, ListItemIcon } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <Tooltip title="Select an other study">
              <ListItemText primary="COVID-19 study" />
            </Tooltip>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Study Editor" />
          </ListItem>
        </List>

      </div>
    </Drawer>
  )
};

export default AppDrawer;
