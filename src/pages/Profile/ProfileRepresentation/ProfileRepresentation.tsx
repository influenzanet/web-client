import React from 'react';
import { Profile } from '../../../types/user';
import { Grid, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import getAvatarPathFromID from '../utils/ProfileUtils';

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
      userSelect: "none",
      objectFit: "scale-down",
    },
    alias: {
      width: 136,
      textAlign: "center",
      userSelect: "none",
    },
    avatarContainer: {
      width: "auto",
      userSelect: "all",
      cursor: "pointer",
      borderRadius: 16,
      '&:hover': {
        backgroundColor: "white",
      },
    },
    spacer: {
      height: 12,
    }
  }),
);

const ProfileRepresenation: React.FC<ProfileRepresentationProps> = (props) => {
  const classes = useStyles();

  let words = props.profile.alias.split(" ");
  let initials = "";
  words.forEach((word) => {
    word = word.trim();
    if (word.length > 0) {
      initials = initials + word[0].toUpperCase();
    }
  });

  let avatarPath = getAvatarPathFromID(props.profile.avatarId);

  const onSelected = () => {
    props.onSelected(props.profile);
  }

  return (
    <Grid item container className={classes.avatarContainer} direction="column" alignItems="center" onClick={onSelected}>
      <img className={classes.avatar} alt="" src={avatarPath} />
      <div className={classes.spacer} />
      <Typography variant="subtitle1" className={classes.alias} noWrap={true} >
        {props.profile.alias}
      </Typography>
    </Grid>
  );
};

export default ProfileRepresenation;
