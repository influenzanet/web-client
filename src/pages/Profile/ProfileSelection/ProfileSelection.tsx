import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, makeStyles, Theme, createStyles, Grid, Avatar, Box } from '@material-ui/core';
import FlexGrow from '../../../components/common/FlexGrow';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import { Profile } from '../../../types/user';
import ProfileRepresenation from '../ProfileRepresentation/ProfileRepresentation';

interface ProfileSelectionProps {
}

const profiles: Profile[] = [
  {
    id: "1",
    alias: "Pink Hamster",
    consentConfirmedAt: 0,
    avatarId: "orange",
    createdAt: 0,
  },
  {
    id: "2",
    alias: "Joyful Elephant",
    consentConfirmedAt: 0,
    avatarId: "red",
    createdAt: 0,
  },
  {
    id: "3",
    alias: "Old Panda",
    consentConfirmedAt: 0,
    avatarId: "purple",
    createdAt: 0,
  },
  {
    id: "4",
    alias: "Daring Goose",
    consentConfirmedAt: 0,
    avatarId: "indigo",
    createdAt: 0,
  },
  {
    id: "5",
    alias: "Majestic Hamster",
    consentConfirmedAt: 0,
    avatarId: "SteelBlue",
    createdAt: 0,
  },
  {
    id: "6",
    alias: "Kind Bear",
    consentConfirmedAt: 0,
    avatarId: "LightSlateGray",
    createdAt: 0,
  },
  {
    id: "7",
    alias: "Elongated Hippopotamusasdfasdfasdfasdf blablala asddfasdfasdf ",
    consentConfirmedAt: 0,
    avatarId: "Black",
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
        Who are you?
      </Typography>
      <div className={classes.spacer} />
      {avatars()}
      <div className={classes.spacer} />
      <RoundedButton
        className={classes.btn}
      >
        Manage Profiles
      </RoundedButton>
      <div className={classes.spacer} />
      <FlexGrow />
    </Container>
  );
};

export default ProfileSelection;
