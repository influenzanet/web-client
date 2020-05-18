import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import FlexGrow from '../../../components/common/FlexGrow';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import { Profile } from '../../../types/user';
import ProfileRepresenation from '../ProfileRepresentation/ProfileRepresentation';

interface ProfileSelectionProps {
}

const profiles: Profile[] = [
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
    }
  }),
);

const ProfileSelection: React.FC<ProfileSelectionProps> = (props) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);

  const profileList = profiles.map((profile) =>
    <ProfileRepresenation key={profile.id} profile={profile} onSelected={(profile) => { console.log(profile.alias) }}>
    </ProfileRepresenation>);

  const avatars = () => {
    return <Grid item container direction="row" spacing={4} justify="center" style={{ minHeight: "auto", width: "100%" }}>
      {profileList}
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
      >
        {t('app:profileSelectionPage.manageProfilesButtonLabel')}
      </RoundedButton>
      <div className={classes.spacer} />
      <FlexGrow />
    </Container>
  );
};

export default ProfileSelection;
