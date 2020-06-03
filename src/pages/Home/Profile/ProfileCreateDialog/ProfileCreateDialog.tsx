import React, { useState, useEffect } from 'react';
import { Dialog, makeStyles, Theme, createStyles, Typography, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { Profile } from '../../../../types/user';
import ProfileRepresenation from '../ProfileRepresentation/ProfileRepresentation';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import { useTranslation } from 'react-i18next';

interface ProfileCreateDialogProps {
  defaultProfile: Profile,
  open: boolean;
  onClose: () => any;
  onCreated: (profile: Profile) => any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: 32,
      backgroundColor: theme.palette.background.default,
    },
    avatarImage: {
      width: 136,
      height: 120,
      userSelect: "none",
      objectFit: "scale-down",
    },
    avatarContainer: {
      width: "auto",
      userSelect: "all",
      cursor: "pointer",
      borderRadius: 16,
      padding: 16,
      '&:hover': {
        backgroundColor: "white",
      },
    },
    spacer: {
      width: 16,
      height: 16,
    },
    consentLabel: {
      margin: 0,
      padding: 0,
      width: 300,
      userSelect: "none",
    }
  }),
);

const ProfileCreateDialog: React.FC<ProfileCreateDialogProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation(['app']);

  let [newProfile, setNewProfile] = useState(props.defaultProfile);

  useEffect(() => {
    setNewProfile(props.defaultProfile);
  }, [props.defaultProfile]);

  const onCreateClicked = () => {
    newProfile.createdAt = new Date().getTime();
    props.onCreated(newProfile);
  }

  const onConsentClicked = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (checked) {
      setNewProfile({ ...newProfile, consentConfirmedAt: new Date().getTime() });
    } else {
      setNewProfile({ ...newProfile, consentConfirmedAt: 0 });
    }
  }

  return (
    <Dialog
      PaperProps={{
        className: classes.paper,
      }}
      onClose={props.onClose} open={props.open}>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h4" color="primary" align="center">{t('app:profileCreateDialog.title')}</Typography>
        <div className={classes.spacer} />
        <div className={classes.spacer} />
        <ProfileRepresenation profile={newProfile} editMode={true} createMode={true} onSelected={() => { }}
          onDeleted={() => { }}
          onUpdated={() => { setNewProfile({ ...newProfile }) }} />
        <div className={classes.spacer} />
        <FormControlLabel
          control={
            <Checkbox checked={newProfile.consentConfirmedAt > 0}
              onChange={onConsentClicked}
            />
          }
          label={t('app:profileCreateDialog.consentLabel')}
          className={classes.consentLabel}
        />
        <div className={classes.spacer} />
        <div className={classes.spacer} />
        <Grid container item direction="row" justify="center">
          <RoundedButton color="secondary" onClick={() => props.onClose()}>
            {t('app:buttons.cancel')}
          </RoundedButton>
          <div className={classes.spacer} />
          <RoundedButton color="primary" onClick={onCreateClicked} disabled={!(newProfile.consentConfirmedAt > 0)}>
            {t('app:profileCreateDialog.createProfileButton')}
          </RoundedButton>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ProfileCreateDialog;
