import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { navigationActions } from '../../../store/navigation/navigationSlice';
import { RootState } from '../../../store';
import { useHistory } from 'react-router';
import {
  Avatar,
  Grid,
  MenuItem,
  Select
} from "@material-ui/core";
import getAvatarPathFromID from "../../../pages/Home/Profile/utils/ProfileUtils";
import {Profile} from "../../../types/user";
import {userActions} from "../../../store/user/userSlice";
import {switchProfileReq} from "../../../api/auth-api";
import {apiActions} from "../../../store/api/apiSlice";
import {minuteToMillisecondFactor} from "../../../constants";
import {setDefaultAccessTokenHeader} from "../../../api/instances/auth-api-instance";
import {useAsyncCall} from "../../../hooks";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  profileSelection: {
    width: '15%',
    overflow: 'hidden',
    whitespace: 'nowrap',
  },
}));

export const NavBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, asyncCall] = useAsyncCall();

  const pageTitle = useSelector((state: RootState) => state.navigation.appBar.currentPageTitle);
  const profileList = useSelector((state: RootState) => state.user.currentUser.profiles);
  const refreshToken = useSelector((state: RootState) => state.api.refreshToken);
  let selectedProfile = useSelector((state: RootState) => state.user.selectedProfileId);
  const showBackButton = useSelector((state: RootState) => state.navigation.appBar.showBackBtn);
  const showProfileSelection = useSelector((state: RootState) => state.navigation.appBar.showProfileSelection);
  const showMenuButton = useSelector((state: RootState) => state.navigation.appBar.showMenuButton);
  const dispatch = useDispatch();

  const switchProfile =  async (profileId: string) => {
    await asyncCall(async () => {
      const response = await switchProfileReq({
        profileId: profileId,
        refreshToken: refreshToken,
      });
      let tokenRefreshedAt = new Date().getTime();
      setDefaultAccessTokenHeader(response.data.accessToken);
      dispatch(apiActions.setState({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresAt: tokenRefreshedAt + response.data.expiresIn * minuteToMillisecondFactor,
      }));
      dispatch(userActions.setFromTokenResponse(response.data));
      history.goBack();
    });
  };

  const handleChange = (event: any) => {
    switchProfile(event.target.value);
    dispatch(userActions.setSelectedProfileID(event.target.value));
  };

  const backButton = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        // color="secondary"
        aria-label="close"
        onClick={() =>
          history.goBack()
        }
      >
        <ArrowBackIcon />
      </IconButton>
    );
  }

  const profileSelectDropdown = () => {
    return (
        <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper-1"
            value={selectedProfile}
            className={classes.profileSelection}
            onChange={handleChange}>
          { profileList.map((value: Profile, index) => {
            const valueId: string = value.id;
            return (<MenuItem value={valueId} key={valueId}>
              <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    alt={`${value.alias}`}
                    src={getAvatarPathFromID(`${value.avatarId}`)}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="primary">
                    {value.alias}
                  </Typography>
                </Grid>
              </Grid>
            </MenuItem>)
          })}
        </Select>

    )
  };

  const drawerButton = () => {
    return (
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="secondary"
        aria-label="menu"
        onClick={() => dispatch(navigationActions.openNavigationDrawer())}
      >
        <MenuIcon />
      </IconButton>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar >
          {
            (showMenuButton)
              ? drawerButton()
              : null
          }
          {
            (showBackButton)
              ? backButton()
              : null
          }
          <Typography variant="h6" className={classes.title} color="primary">
            {pageTitle}
          </Typography>
          {
            (showProfileSelection)
            ?
              profileSelectDropdown()
              : null
          }

        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;


