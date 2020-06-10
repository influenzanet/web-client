import React from 'react';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { Typography, Grid, } from '@material-ui/core';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useStyles } from '../../../hooks';
import { useTranslation } from 'react-i18next';


const Settings: React.FC = () => {
  const classes = useStyles(theme => ({
    deleteButton: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark
      }
    }
  }));

  const { t } = useTranslation(['app']);
  const user = useSelector((state: RootState) => state.user);

  return (
    <NavigationHomePage title={t("app:settingsPage.title")}>
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
              {t("app:settingsPage.changePasswordButtonLabel")}
            </RoundedButton>
          </Grid>
        </Grid>
        <FlexGrow />
        <RoundedButton className={classes.deleteButton}>
          {t("app:settingsPage.deleteAccountButtonLabel")}
        </RoundedButton>
        <div style={{ height: 32 }} />
      </CenterPage>
    </NavigationHomePage>
  );
};

export default Settings;
