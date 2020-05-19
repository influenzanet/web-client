import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, makeStyles, Theme, createStyles, Grid, useTheme } from '@material-ui/core';
import FlexGrow from '../../../components/common/FlexGrow';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import { Profile } from '../../../types/user';
import ProfileRepresenation from '../ProfileRepresentation/ProfileRepresentation';
import RoundedBox from '../../../components/ui/RoundedBox';
import ProfileCreateDialog from '../ProfileCreateDialog/ProfileCreateDialog';

interface ProfileSelectionProps {
}

const profilesList: Profile[] = [
  {
    id: "1",
    alias: "Average Alpaca",
    consentConfirmedAt: 0,
    avatarId: "default_alpaca",
    createdAt: 0,
  },
  {
    id: "2",
    alias: "Daring Dolphin",
    consentConfirmedAt: 0,
    avatarId: "default_dolphin",
    createdAt: 0,
  },
  {
    id: "3",
    alias: "Eloquent Elephant",
    consentConfirmedAt: 0,
    avatarId: "default_elephant",
    createdAt: 0,
  },
  {
    id: "4",
    alias: "Old Owl",
    consentConfirmedAt: 0,
    avatarId: "default_owl",
    createdAt: 0,
  },
  {
    id: "5",
    alias: "Fancy Flamingo",
    consentConfirmedAt: 0,
    avatarId: "default_flamingo",
    createdAt: 0,
  },
  {
    id: "6",
    alias: "Fierce Fox",
    consentConfirmedAt: 0,
    avatarId: "default_fox",
    createdAt: 0,
  },
  {
    id: "7",
    alias: "Galant Gecko",
    consentConfirmedAt: 0,
    avatarId: "default_gecko",
    createdAt: 0,
  },
  {
    id: "8",
    alias: "Posh Panda",
    consentConfirmedAt: 0,
    avatarId: "default_panda",
    createdAt: 0,
  },
  {
    id: "9",
    alias: "Perfect Penguin",
    consentConfirmedAt: 0,
    avatarId: "default_penguin",
    createdAt: 0,
  },
  {
    id: "10",
    alias: "Sassy Spider",
    consentConfirmedAt: 0,
    avatarId: "default_spider",
    createdAt: 0,
  },
  {
    id: "11",
    alias: "Bold Bull",
    consentConfirmedAt: 0,
    avatarId: "default_bull",
    createdAt: 0,
  },
  {
    id: "12",
    alias: "Mr. X",
    consentConfirmedAt: 0,
    avatarId: "default_default",
    createdAt: 0,
  },
];

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

const ProfileSelection: React.FC<ProfileSelectionProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);

  const getCurrentDefaultProfile = () => {
    return {
      id: new Date().toUTCString(),
      alias: "",
      consentConfirmedAt: 0,
      avatarId: "",
      createdAt: 0,
    };
  }

  let [editMode, setEditMode] = useState(false);
  let [profiles, setProfiles] = useState(profilesList);
  let [defaultProfile, setDefaultProfile] = useState<Profile>(getCurrentDefaultProfile());

  let [createProfileDialogOpen, setCreateProfileDialogOpen] = useState(false);


  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);

  const onCreateProfileDialogClosed = () => {
    setCreateProfileDialogOpen(false);
  }

  const onProfileCreated = (profile: Profile) => {
    console.log(profile.consentConfirmedAt);
    onCreateProfileDialogClosed();
    setProfiles([...profiles, profile]);
  }

  const onProfileSelected = (profile: Profile) => {
    console.log(profile.alias)
  };

  const onProfileDeleted = (profile: Profile) => {
    setProfiles(profiles.filter((p) => p != profile));
  };

  const onProfileUpdated = (profile: Profile) => {
    setProfiles(profiles.slice());
  }

  const onNewProfileClicked = () => {
    setDefaultProfile(getCurrentDefaultProfile());
    setCreateProfileDialogOpen(true);
  }

  const profileList = profiles.map((profile) =>
    <ProfileRepresenation key={profile.id} profile={profile} editMode={editMode} createMode={false} onSelected={onProfileSelected} onDeleted={onProfileDeleted} onUpdated={onProfileUpdated} />);

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

  return (
    <Container ref={containerRef} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
    </Container>
  );
};

export default ProfileSelection;
