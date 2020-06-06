import React, { useRef, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, makeStyles, Theme, createStyles, Grid, useTheme, CircularProgress, Dialog } from '@material-ui/core';
import FlexGrow from '../../../../components/common/FlexGrow';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import { Profile } from '../../../../types/user';
import ProfileRepresenation from '../ProfileRepresentation/ProfileRepresentation';
import RoundedBox from '../../../../components/ui/RoundedBox';
import ProfileCreateDialog from '../ProfileCreateDialog/ProfileCreateDialog';
import FullscreenHomePage from '../../../../components/ui/pages/Home/FullscreenHomePage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store';
import { useMountEffect, useRedirectUrl } from '../../../../hooks';
import { getUserReq, saveProfileReq, removeProfileReq } from '../../../../api/user-management-api';
import { userActions } from '../../../../store/user/userSlice';
import { HomePaths } from '../../../../routes';
import { useHistory } from 'react-router';
import { switchProfileReq } from '../../../../api/auth-api';
import { apiActions } from '../../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../../constants';
import { setDefaultAccessTokenHeader } from '../../../../api/instances/auth-api-instance';
import LoadingDialog from '../../../../components/ui/dialogs/LoadingDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      width: 200,
    },
    spacer: {
      height: 32,
    },
    profileCreateBox: {
      //margin: 0,
      width: 136,
      height: 136,
      alignSelf: "center",
      textAlign: "center",
      verticalAlign: "middle",
      cursor: "pointer",
      margin: 16,
      "&:hover": {
        backgroundColor: theme.palette.action.disabledBackground
      },
    },
    profileCreateText: {
      userSelect: "none",
    }
  }),
);


const ProfileSelection: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);
  const dispatch = useDispatch();
  const redirectUrl = useRedirectUrl(HomePaths.Dashboard);
  const history = useHistory();

  const getCurrentDefaultProfile = () => {
    return {
      id: "",
      alias: "",
      consentConfirmedAt: 0,
      avatarId: "",
      createdAt: 0,
    };
  }
  const profiles = useSelector((state: RootState) => state.user.currentUser.profiles);
  const refreshToken = useSelector((state: RootState) => state.api.refreshToken);

  let [defaultProfile, setDefaultProfile] = useState<Profile>(getCurrentDefaultProfile());
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [createProfileDialogOpen, setCreateProfileDialogOpen] = useState(false);


  useMountEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }

    updateUser();
  });

  const updateUser = async () => {
    await asyncCall(async () => {
      const response = await getUserReq();
      dispatch(userActions.setUser(response.data));
    });
  }

  const saveProfile = async (profile: Profile) => {
    await asyncCall(async () => {
      const response = await saveProfileReq(profile);
      dispatch(userActions.setUser(response.data));
    });
  }

  const removeProfile = async (profile: Profile) => {
    await asyncCall(async () => {
      const response = await removeProfileReq(profile.id);
      dispatch(userActions.setUser(response.data));
    });
  }

  const switchProfile = async (profile: Profile) => {
    await asyncCall(async () => {
      const response = await switchProfileReq({
        profileId: profile.id,
        refreshToken: refreshToken,
      });

      let tokenRefreshedAt = new Date().getTime();

      dispatch(apiActions.setState({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresAt: tokenRefreshedAt + response.data.expiresIn * minuteToMillisecondFactor,
      }));

      setDefaultAccessTokenHeader(response.data.accessToken);

      dispatch(userActions.setFromTokenResponse(response.data));
    });
  }

  const asyncCall = async (call: () => Promise<void>) => {
    if (loading) return;
    setLoading(true);

    try {
      await call();
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }

  const switchProfileAndContinue = async (profile: Profile) => {
    await switchProfile(profile);
    history.push(redirectUrl);
  }

  const onCreateProfileDialogClosed = () => {
    setCreateProfileDialogOpen(false);
  }

  const onProfileCreated = (profile: Profile) => {
    onCreateProfileDialogClosed();
    saveProfile(profile);
  }

  const onProfileSelected = (profile: Profile) => {
    switchProfileAndContinue(profile);
  };

  const onProfileDeleted = (profile: Profile) => {
    removeProfile(profile);
  };

  const onProfileUpdated = (profile: Profile) => {
    saveProfile(profile);
  }

  const onNewProfileClicked = () => {
    setDefaultProfile(getCurrentDefaultProfile());
    setCreateProfileDialogOpen(true);
  }

  const profileList = profiles.map((profile) =>
    <ProfileRepresenation key={profile.id} profile={profile} editMode={editMode} createMode={false} allowDelete={profiles.length > 1} onSelected={onProfileSelected} onDeleted={onProfileDeleted} onUpdated={onProfileUpdated} />);

  const avatars = () => {
    return <Grid item container direction="row" spacing={0} justify="center" style={{ minHeight: "auto", width: "100%" }}>
      {profileList}
      {editMode
        ? <RoundedBox color={theme.palette.action.selected} classNames={[classes.profileCreateBox]} onClick={onNewProfileClicked}>
          <Typography variant="h1" className={classes.profileCreateText}>+</Typography>
          <Typography variant="body1" className={classes.profileCreateText}>{t('app:profileSelectionPage.newProfileButtonLabel')}</Typography>
        </RoundedBox>
        : null
      }
    </Grid>
  }

  const loadingDialog = () => {
    return (
      <LoadingDialog open={loading} />
    );
  }

  const profileSelectionScreen = () => {
    return (
      <Fragment>
        <FlexGrow />
        <div className={classes.spacer} />
        <Typography variant="h3" color="primary" align="center">
          {t('app:profileSelectionPage.headline')}
        </Typography>
        <div className={classes.spacer} />
        {avatars()}
        <div className={classes.spacer} />
        <RoundedButton
          className={classes.btn}
          onClick={() => setEditMode(!editMode)}
        >
          {(editMode) ? t('app:profileSelectionPage.selectProfilesButtonLabel') : t('app:profileSelectionPage.manageProfilesButtonLabel')}
        </RoundedButton>
        <div className={classes.spacer} />
        <FlexGrow />
        <ProfileCreateDialog defaultProfile={defaultProfile} open={createProfileDialogOpen} onCreated={onProfileCreated} onClose={onCreateProfileDialogClosed} />
      </Fragment>
    );
  }

  return (
    <FullscreenHomePage>
      <Container ref={containerRef} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {profileSelectionScreen()}
        {loadingDialog()}
      </Container>
    </FullscreenHomePage>
  );
};

export default ProfileSelection;
