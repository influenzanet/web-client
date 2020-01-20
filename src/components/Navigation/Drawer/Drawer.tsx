import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  Drawer as MDrawer,
  Button,
  AppBar,
  Toolbar,
  Box,
  Grid,
  List,
  Divider,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './Drawer.module.scss';
import logo from '../../../assets/images/Influenzanet_Logoinsgesamt_RGB.png';
import { NavigationState } from '../../../store/navigation/types';
import { closeNavigationDrawer } from '../../../store/navigation/actions';
// import { LinkRef } from '../../../common/link';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { LinkRef } from '../../common/link';

type DrawerSide = 'top' | 'left' | 'bottom' | 'right';

type DrawerProps = {
  side: DrawerSide,
}

interface RouteProps {
  path: string;
  isExact: string;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerContent: {
      padding: theme.spacing(1, 2),
    },
    currentRoute: {
      color: theme.palette.secondary.main,
    }
  }),
);


export const Drawer: React.FC<DrawerProps> = (props) => {
  const classes = useStyles();
  const drawerOpen = useSelector((state: { navigation: NavigationState }) => state.navigation.drawerOpen)
  const dispatch = useDispatch();

  const closeDrawer = () => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    console.log('call close drawer')
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    console.log('close drawer - call action');
    dispatch(closeNavigationDrawer());

    /*setState(oldState => ({
        ...oldState,
        open,
    }));*/
    // drawerOpen = false;
  };

  let matchHomeRoute = useRouteMatch<RouteProps>("/home");
  let matchMyStudiesRoute = useRouteMatch<RouteProps>("/home/my-studies");

  const checkRouteMatch = (match: any | null, exact: boolean): boolean => {
    if (!match || (exact && !match.isExact)) {
      return false;
    }
    return true;
  }


  return (
    <MDrawer
      classes={{ paper: styles.drawer }}
      open={drawerOpen}
      anchor={props.side}
      onClose={closeDrawer()}
    >
      <AppBar position="static" className={styles.drawerAppbar} elevation={0}>
        <Toolbar>
          <img src={logo} alt="logo" className={styles.drawerLogo} />
        </Toolbar>
      </AppBar>
      <Box className={styles.drawerContent + ' ' + classes.drawerContent}
        display="flex"
        flexDirection="column"
      >
        <List>
          <ListItem button key={'Home'}
            className={checkRouteMatch(matchHomeRoute, true) ? classes.currentRoute : ''}
            onClick={() => {
              dispatch(closeNavigationDrawer());
            }}
            component={LinkRef} to="/home"
          >
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button key={'Explore'}>
            <ListItemText primary={'Explore'} />
          </ListItem>
          <ListItem button key={'My Studies'}
            onClick={() => {
              dispatch(closeNavigationDrawer());
            }}
            className={checkRouteMatch(matchMyStudiesRoute, true) ? classes.currentRoute : ''}
            component={LinkRef} to="/home/my-studies"
          >
            <ListItemText primary={'My Studies'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Coverage Map'}>
            <ListItemText primary={'Coverage Map'} />
          </ListItem>
          <ListItem button key={'Devices'}>
            <ListItemText primary={'Devices'} />
          </ListItem>
          <ListItem button key={'News'}>
            <ListItemText color="secondary" primary={'News'} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={'Profile'}>
            <ListItemText primary={'Profile'} />
          </ListItem>
          <ListItem button key={'History'} disabled>
            <ListItemText primary={'History'} />
          </ListItem>
          <ListItem button key={'Settings'} disabled>
            <ListItemText primary={'Settings'} />
          </ListItem>
        </List>


        <Box flexGrow={1}></Box>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Button
              className={styles.drawerBtn}
              variant="outlined" color="secondary"
              onClick={() => {
                dispatch(closeNavigationDrawer());
              }}
              component={LinkRef} to="/start"
            >
              Logout</Button>
          </Grid>
        </Grid>
      </Box>

    </MDrawer>
  );
}


export default Drawer;

