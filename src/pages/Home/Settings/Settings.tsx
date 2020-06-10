import React, { useState, Fragment } from 'react';
import NavigationHomePage from '../../../components/ui/pages/Home/NavigationHomePage';
import { Typography, Grid, } from '@material-ui/core';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useStyles, useAsyncCall, useLogout } from '../../../hooks';
import { useTranslation } from 'react-i18next';
import LoadingDialog from '../../../components/ui/dialogs/LoadingDialog';
import { deleteAccountReq } from '../../../api/user-management-api';
import ConfirmationDialog from '../../../components/ui/dialogs/ConfirmationDialog';


const Settings: React.FC = () => {
  const classes = useStyles(theme => ({
    deleteButton: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark
      }
    },
  }));

  const { t } = useTranslation(['app']);
  const user = useSelector((state: RootState) => state.user);
  const logout = useLogout();
  const [loading, asyncCall] = useAsyncCall();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const onDeleteAccountClicked = () => {
    setDeleteDialogOpen(true);
  }

  const onDeleteAccount = () => {
    asyncCall(async () => {
      let response = await deleteAccountReq(user.currentUser.id);
      if (response.status === 200) {
        logout();
        return true;
      }
    });
  }

  const dialogs = () => {
    return (
      <Fragment>
        <LoadingDialog open={loading} />
        <ConfirmationDialog
          open={deleteDialogOpen}
          title={t("app:settingsPage.deleteDialogTitle")}
          description={t("app:settingsPage.deleteDialogDescription")}
          onConfirmed={onDeleteAccount}
          onCancelled={() => setDeleteDialogOpen(false)}
        />
      </Fragment>
    );
  }

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
        <RoundedButton className={classes.deleteButton} onClick={onDeleteAccountClicked}>
          {t("app:settingsPage.deleteAccountButtonLabel")}
        </RoundedButton>
        <div style={{ height: 32 }} />
      </CenterPage>
      {dialogs()}
    </NavigationHomePage>
  );
};

export default Settings;
