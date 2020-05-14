import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, makeStyles, Theme, createStyles, Grid, Avatar } from '@material-ui/core';
import FlexGrow from '../../../components/common/FlexGrow';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import { Profile } from '../../../types/user';
import ProfileRepresenation from '../ProfileRepresentation/ProfileRepresentation';

interface ProfileSelectionProps {
}

const profiles: Profile[] = [
  {
    id: "",
    alias: "Pink Hamster",
    consentConfirmedAt: 0,
    avatarId: "orange",
    createdAt: 0,
  },
  {
    id: "",
    alias: "Joyful Elephant",
    consentConfirmedAt: 0,
    avatarId: "red",
    createdAt: 0,
  },
  {
    id: "",
    alias: "Old Panda",
    consentConfirmedAt: 0,
    avatarId: "purple",
    createdAt: 0,
  },
  {
    id: "",
    alias: "Daring Goose",
    consentConfirmedAt: 0,
    avatarId: "indigo",
    createdAt: 0,
  },
  {
    id: "",
    alias: "Majestic Hamster",
    consentConfirmedAt: 0,
    avatarId: "SteelBlue",
    createdAt: 0,
  },
  {
    id: "",
    alias: "Kind Bear",
    consentConfirmedAt: 0,
    avatarId: "LightSlateGray",
    createdAt: 0,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      width: 200,
    },
  }),
);

const ProfileSelection: React.FC<ProfileSelectionProps> = (props) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);

  const profileList = profiles.map((profile) =>
    <ProfileRepresenation profile={profile} onSelected={(profile) => { }}>
    </ProfileRepresenation>);

  const avatarRow = () => {
    return <Grid item container direction="row" spacing={4} justify="center">
      {profileList}
    </Grid>
  }

  return (
    <Container ref={containerRef} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <FlexGrow />
      <Typography variant="h3" color="primary" align="center">
        Who are you?
      </Typography>
      <div style={{ height: 32 }} />
      {avatarRow()}
      <div style={{ height: 32 }} />
      <RoundedButton
        className={classes.btn}
      >
        Manage Profiles
      </RoundedButton>
      <FlexGrow />
    </Container>
  );
};

export default ProfileSelection;
