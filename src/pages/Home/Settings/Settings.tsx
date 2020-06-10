import React from 'react';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { Typography, Grid, } from '@material-ui/core';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useStyles } from '../../../hooks';


const Settings: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const classes = useStyles(theme => ({
    deleteButton: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark
      }
    }
  }));

  return (
    <NavigationHomePage title="Settings">
      <CenterPage>
        <FlexGrow />
        <Grid container direction="column" spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="h5">
              {user.currentUser.account.accountId}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              ••••••••••••••••••••••••
            </Typography>
          </Grid>
          <Grid item>
            <RoundedButton color="secondary">
              Change Password
            </RoundedButton>
          </Grid>
        </Grid>
        <FlexGrow />
        <RoundedButton className={classes.deleteButton}>
          Delete Account
        </RoundedButton>
        <div style={{ height: 32 }} />
      </CenterPage>
    </NavigationHomePage>
  );
};

export default Settings;
