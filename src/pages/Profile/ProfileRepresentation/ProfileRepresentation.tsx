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

  let avatarPath = "/static/images/avatar/Unknown_Bunt.png";

  switch (props.profile.avatarId) {
    case "default_default":
      avatarPath = "/static/images/avatar/Unknown_Bunt.png";
      break;
    case "default_alpaca":
      avatarPath = "/static/images/avatar/Alpaka_Bunt.png";
      break;
    case "default_dolphin":
      avatarPath = "/static/images/avatar/Delfin_Bunt.png";
      break;
    case "default_elephant":
      avatarPath = "/static/images/avatar/Elefant_Bunt.png";
      break;
    case "default_owl":
      avatarPath = "/static/images/avatar/Eule_Bunt.png";
      break;
    case "default_flamingo":
      avatarPath = "/static/images/avatar/Flamingo_Bunt.png";
      break;
    case "default_fox":
      avatarPath = "/static/images/avatar/Fuchs_Bunt.png";
      break;
    case "default_gecko":
      avatarPath = "/static/images/avatar/Gecko_Bunt.png";
      break;
    case "default_panda":
      avatarPath = "/static/images/avatar/Panda_Bunt.png";
      break;
    case "default_penguin":
      avatarPath = "/static/images/avatar/Pinguin_Bunt.png";
      break;
    case "default_spider":
      avatarPath = "/static/images/avatar/Spinne_Bunt.png";
      break;
    case "default_bull":
      avatarPath = "/static/images/avatar/Stier_Bunt.png";
      break;
  }

  const onSelected = () => {
    props.onSelected(props.profile);
  }

  return (
    <Grid item container className={classes.avatarContainer} direction="column" alignItems="center" onClick={onSelected}>
      <img className={classes.avatar} src={process.env.PUBLIC_URL + avatarPath} />
      <div className={classes.spacer} />
      <Typography variant="subtitle1" className={classes.alias} noWrap={true} >
        {props.profile.alias}
      </Typography>
    </Grid>
  );
};

export default ProfileRepresenation;
