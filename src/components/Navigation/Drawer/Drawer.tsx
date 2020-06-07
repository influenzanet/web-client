import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  Drawer as MDrawer,
  AppBar,
  Toolbar,
  Box,
  Grid,
  List,
  Divider,
  ListItem,
  ListItemText,
  // Hidden
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import styles from './Drawer.module.scss';
import logo from '../../../assets/images/Influenzanet_Logoinsgesamt_RGB.png';
// import { LinkRef } from '../../../common/link';
import { useRouteMatch, match } from 'react-router-dom';
import { LinkRef } from '../../common/link';
import { navigationActions } from '../../../store/navigation/navigationSlice';
import { RootState } from '../../../store';
import { useLogout } from '../../../hooks';
import { HomePaths } from '../../../routes';
import RoundedButton from '../../ui/buttons/RoundedButton';
import { useTranslation } from 'react-i18next';

type DrawerSide = 'top' | 'left' | 'bottom' | 'right';

type DrawerProps = {
  side: DrawerSide,
}

interface RouteProps {
  path: string;
  isExact: string;
}

interface DrawerItem {
  key: string;
  name: string;
  path: string;
  exactPath: boolean;
  routeMatch: match<RouteProps> | null;
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
  const drawerOpen = useSelector((state: RootState) => state.navigation.drawerOpen)
  const dispatch = useDispatch();
  const logout = useLogout();

  const { t } = useTranslation(['app']);

  const closeDrawer = () => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    dispatch(navigationActions.closeNavigationDrawer());
  };

  const drawerItems1: DrawerItem[] = [
    {
      key: "Home",
      name: t("app:drawer.homeLabel"),
      routeMatch: useRouteMatch<RouteProps>(HomePaths.Dashboard),
      exactPath: true,
      path: HomePaths.Dashboard,
    },
    {
      key: "My Studies",
      name: t("app:drawer.myStudiesLabel"),
      routeMatch: useRouteMatch<RouteProps>(HomePaths.MyStudies),
      exactPath: false,
      path: HomePaths.MyStudies,
    },
  ];

  const drawerItems2: DrawerItem[] = [
    {
      key: "Profiles",
      name: t("app:drawer.profilesLabel"),
      routeMatch: useRouteMatch<RouteProps>(HomePaths.Profiles),
      exactPath: true,
      path: HomePaths.Profiles,
    },
  ];

  const checkRouteMatch = (match: match<RouteProps> | null, exact: boolean): boolean => {
    if (!match || (exact && !match.isExact)) {
      return false;
    }
    return true;
  }

  const drawerListItem = (item: DrawerItem) => {
    return (
      <ListItem button key={item.key}
        className={checkRouteMatch(item.routeMatch, item.exactPath) ? classes.currentRoute : ''}
        onClick={() => {
          dispatch(navigationActions.closeNavigationDrawer());
        }}
        component={LinkRef} to={item.path}
      >
        <ListItemText primary={item.name} />
      </ListItem>
    );
  }

  const drawerList = (items: DrawerItem[]) => {
    return (
      <List>
        {items.map((item) => drawerListItem(item))}
      </List>
    );
  }

  const drawerContent = () => {
    return (
      <Fragment>
        <AppBar position="static" className={styles.drawerAppbar} elevation={0}>
          <Toolbar>
            <img src={logo} alt="logo" className={styles.drawerLogo} />
          </Toolbar>
        </AppBar>
        <Box className={styles.drawerContent + ' ' + classes.drawerContent}
          display="flex"
          flexDirection="column"
        >
          {drawerList(drawerItems1)}
          <Divider />
          {drawerList(drawerItems2)}

          <Box flexGrow={1}></Box>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <RoundedButton
                color="secondary"
                onClick={() => {
                  dispatch(navigationActions.closeNavigationDrawer());
                  logout();
                }}
              >
                {t("app:drawer.logoutButtonLabel")}
              </RoundedButton>
            </Grid>
          </Grid>
        </Box>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* <Hidden smUp> */}
      <MDrawer
        classes={{ paper: styles.drawer }}
        open={drawerOpen}
        anchor={props.side}
        onClose={closeDrawer()}
        variant="temporary"
      >
        {drawerContent()}
      </MDrawer>
      {/* </Hidden> */}
      {/* <Hidden xsDown>
        <MDrawer
          classes={{ paper: styles.drawer }}
          open={drawerOpen}
          anchor={props.side}
          variant="permanent"
        >
          {drawerContent()}
        </MDrawer>
      </Hidden> */}
    </Fragment>
  );
}


export default Drawer;


