import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, makeStyles, Theme, createStyles, Grid, Avatar } from '@material-ui/core';
import FlexGrow from '../../../components/common/FlexGrow';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';

interface ProfileSelectionProps {
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

const ProfileSelection: React.FC<ProfileSelectionProps> = (props) => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation(['app']);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);

  const avatar = (name: string, content: string, color: string) => {
    return <Grid item container className={classes.avatarContainer} direction="column" alignItems="center">
      <Avatar className={classes.avatar} style={{ backgroundColor: color }}>
        {content}
      </Avatar>
      <div style={{ height: 12 }} />
      <Typography variant="subtitle1">
        {name}
      </Typography>
    </Grid>
  }

  const avatarRow = () => {
    return <Grid item container direction="row" spacing={4} justify="center">
      {avatar("Pink Hamster", "PH", "orange")}
      {avatar("Joyful Elephant", "JE", "red")}
      {avatar("Old Panda", "OP", "purple")}
      {avatar("Daring Goose", "DG", "indigo")}
      {avatar("Majestic Hamster", "MH", "SteelBlue")}
      {avatar("Kind Bear", "KB", "LightSlateGray")}
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
