import React from 'react';
import { Profile } from '../../../types/user';
import { Grid, makeStyles, Theme, createStyles, Typography, Avatar } from '@material-ui/core';

interface ProfileRepresentationProps {
  profile: Profile;
  onSelected: (profile: Profile) => any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      width: 200,
    },
    avatar: {
      width: 120,
      height: 120,
      fontSize: 42,
    },
    avatarContainer: {
      width: "auto",
    }
  }),
);

const ProfileRepresenation: React.FC<ProfileRepresentationProps> = (props) => {
  const classes = useStyles();

  let words = props.profile.alias.split(" ");
  let initials = "";
  words.forEach((word) => initials = initials + word[0].toUpperCase());

  return (
    <Grid item container className={classes.avatarContainer} direction="column" alignItems="center">
      <Avatar className={classes.avatar} style={{ backgroundColor: props.profile.avatarId }}>
        {initials}
      </Avatar>
      <div style={{ height: 12 }} />
      <Typography variant="subtitle1">
        {props.profile.alias}
      </Typography>
    </Grid>
  );
};

export default ProfileRepresenation;
