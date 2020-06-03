import React, { useState } from 'react';
import { Profile } from '../../../../types/user';
import { Grid, makeStyles, Theme, createStyles, Typography, TextField, useTheme } from '@material-ui/core';
import getAvatarPathFromID from '../utils/ProfileUtils';
import RoundedBox from '../../../../components/ui/RoundedBox';
import RoundedButton from '../../../../components/ui/buttons/RoundedButton';
import AvatarDialog from './AvatarDialog/AvatarDialog';
import { useTranslation } from 'react-i18next';

interface ProfileRepresentationProps {
  profile: Profile;
  editMode: boolean;
  createMode: boolean;
  onSelected: (profile: Profile) => any;
  onDeleted: (profile: Profile) => any;
  onUpdated: (profile: Profile) => any;
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
    avatarEdit: {
      width: 136,
      height: 120,
      userSelect: "none",
      objectFit: "scale-down",
    },
    avatarEditBox: {
      margin: 0,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.palette.action.disabledBackground
      },
    },
    alias: {
      width: 136,
      textAlign: "center",
      userSelect: "none",
    },
    editAlias: {
      width: 136,
      textAlign: "center",
      padding: "8px 16px",
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
    editAvatarContainer: {
      width: "auto",
      borderRadius: 16,
      margin: 8,
      padding: 8,
      '&:hover': {
        backgroundColor: "white",
      },
    },
    spacer: {
      height: 12,
    },
  }),
);

const ProfileRepresenation: React.FC<ProfileRepresentationProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation(['app']);

  let [avatarDialogOpen, setAvatarDialogOpen] = useState(false);

  let editMode = props.editMode;
  if (props.createMode) editMode = true;

  let avatarPath = getAvatarPathFromID(props.profile.avatarId);

  const onSelected = () => {
    if (!editMode) {
      props.onSelected(props.profile);
    }
  }

  const onAvatarDialogClosed = () => {
    setAvatarDialogOpen(false);
  }

  const onAvatarSelected = (avatarId: string) => {
    onAvatarDialogClosed();
    props.profile.avatarId = avatarId;
    props.onUpdated(props.profile);
  }

  const handleAliasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.profile.alias = (event.target as HTMLInputElement).value;
    props.onUpdated(props.profile);
  };

  let avatar = (editMode)
    ? <RoundedBox color={theme.palette.action.selected} classNames={[classes.avatarEditBox]} onClick={() => setAvatarDialogOpen(true)}>
      <img className={classes.avatarEdit} alt="" src={avatarPath} />
    </RoundedBox>
    : <img className={classes.avatar} alt="" src={avatarPath} />;

  let nickname = (editMode)
    ? <TextField
      placeholder={t('app:profileRepresentation.nicknamePlaceholder')}
      value={props.profile.alias}
      margin="dense"
      variant="filled"
      inputProps={{
        className: classes.editAlias,
        maxLength: 4000,
      }}
      InputProps={{
        disableUnderline: true,
        style: {
          borderRadius: 1000,
        }
      }}
      onChange={handleAliasChange}
    ></TextField>
    : <Typography variant="subtitle1" className={classes.alias} noWrap={true} >
      {props.profile.alias}
    </Typography>;

  let spacer = (editMode)
    ? null
    : <div className={classes.spacer} />;

  let deleteButton = (editMode && !props.createMode)
    ? <RoundedButton onClick={() => { props.onDeleted(props.profile) }}>
      {t('app:profileRepresentation.deleteButtonLabel')}
    </RoundedButton>
    : null;

  return (
    <Grid item container className={props.createMode ? "" : editMode ? classes.editAvatarContainer : classes.avatarContainer} direction="column" alignItems="center" onClick={onSelected}>
      {avatar}
      {spacer}
      {nickname}
      {deleteButton}
      <AvatarDialog open={avatarDialogOpen} onClose={onAvatarDialogClosed} onSelected={onAvatarSelected} />
    </Grid>
  );
};

export default ProfileRepresenation;
