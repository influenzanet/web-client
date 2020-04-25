import React, { useState } from 'react';
import AppBar from './AppBar/AppBar';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import AppDrawer from './AppDrawer/AppDrawer';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
    },
    drawer: {
      flexShrink: 0,
    }
  }),
);

const MonitoringDemo: React.FC = () => {
  const classes = useStyles();

  let { path: rootPath } = useRouteMatch();
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <div>
      <AppBar
        openNavbar={() => setNavMenuOpen(true)}
      />
      <div className={classes.root}>
        <div className={classes.drawer} >
          <AppDrawer />
        </div>

        <div className={classes.content}>
          <Switch>
            <Route path={`${rootPath}/dashboard`} component={Dashboard} />
            <Redirect to={`${rootPath}/dashboard`}></Redirect>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDemo;
