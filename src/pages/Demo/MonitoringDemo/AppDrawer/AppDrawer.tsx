import React from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemText, Divider, Tooltip, ListItemIcon } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom';

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
    currentRoute: {
      fontWeight: 'bold',
      backgroundColor: '#dedede',
    }
  }),
);

const AppDrawer: React.FC<AppDrawerProps> = (props) => {
  const classes = useStyles();
  const location = useLocation();
  let { path: rootPath } = useRouteMatch();
  const history = useHistory();

  const isRoute = (route: string): boolean => {
    return location.pathname.includes(route);
  }

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
          <ListItem button
            onClick={() => {
              alert('In this demo, there are currently no other studies. The finished system can be used to run different studies with various target groups to fight rare and common diseases.');
            }}
          >
            <Tooltip title="Select an other study">
              <ListItemText primary="COVID-19 study" />
            </Tooltip>
          </ListItem>
          <Divider />
          <ListItem button
            className={isRoute('dashboard') ? classes.currentRoute : undefined}
            onClick={() => {
              history.push(`${rootPath}/dashboard`)
            }}
          >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button
            className={isRoute('analytics') ? classes.currentRoute : undefined}
            onClick={() => {
              history.push(`${rootPath}/analytics`)
            }}
          >
            <ListItemIcon>
              <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button
            disabled
            className={isRoute('editor') ? classes.currentRoute : undefined}
          >
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
