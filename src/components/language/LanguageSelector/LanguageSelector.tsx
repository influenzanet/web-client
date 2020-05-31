import React from 'react';
import { FormControl, makeStyles, createStyles, Theme, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../../../store/user/userSlice';
import { RootState } from '../../../store';

const availableLanguages = [
  { code: 'en', label: '🇬🇧 English' },
  { code: 'de', label: '🇩🇪 Deutsch' },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
    },
  }),
);

const LanguageSelector: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedLanguage = useSelector((state: RootState) => state.user.currentUser.account.preferredLanguage);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newSelectedLanguage = event.target.value as string;
    if (newSelectedLanguage !== selectedLanguage) {
      dispatch(userActions.setPreferredLanguage(newSelectedLanguage));
    }
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="language-select-label"
        id="language-select"
        color="primary"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {
          availableLanguages.map(item =>
            <MenuItem key={item.code} value={item.code}>
              {item.label}
            </MenuItem>)
        }
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
