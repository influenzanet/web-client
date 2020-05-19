import React from 'react';
import { Dialog, Grid, makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import getAvatarPathFromID, { avatarList } from '../../utils/ProfileUtils';
import { useTranslation } from 'react-i18next';

interface AvatarDialogProps {
  open: boolean;
  onClose: () => any;
  onSelected: (avatarId: string) => any;
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
      height: 32,
    },
  }),
);

const AvatarDialog: React.FC<AvatarDialogProps> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation(['app']);

  let avatars = avatarList.map((avatarDefinition) =>
    <Grid item container key={avatarDefinition.id} className={classes.avatarContainer} direction="column" alignItems="center" onClick={() => props.onSelected(avatarDefinition.id)}>
      <img className={classes.avatarImage} alt="" src={getAvatarPathFromID(avatarDefinition.id)} />
    </Grid>
  );

  return (
    <Dialog
      PaperProps={{
        className: classes.paper,
      }}
      onClose={props.onClose} open={props.open}>
      <Typography variant="h4" color="primary" align="center">{t('app:avatarDialog.title')}</Typography>
      <div className={classes.spacer} />
      <Grid item container direction="row" spacing={0} justify="center">
        {avatars}
      </Grid>
    </Dialog>
  );
};

export default AvatarDialog;
