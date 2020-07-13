import { useDispatch } from "react-redux";
import { apiActions } from "../store/api/apiSlice";
import { TokenResponse } from "../types/auth-api";
import { User } from "../types/user";
import { minuteToMillisecondFactor } from "../constants";
import { setDefaultAccessTokenHeader } from "../api/instances/auth-api-instance";
import { userActions } from "../store/user/userSlice";

export const useSetAuthState = (): (token: TokenResponse, user: User) => void => {
  const dispatch = useDispatch();

  const setAuthState = (
    token: TokenResponse,
    user: User,
  ) => {
    const tokenRefreshedAt = new Date().getTime();
    dispatch(apiActions.setState({
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      expiresAt: tokenRefreshedAt + token.expiresIn * minuteToMillisecondFactor,
    }));

    setDefaultAccessTokenHeader(token.accessToken);

    dispatch(userActions.setState({
      currentUser: user,
      selectedProfileId: token.selectedProfileId
    }));
    dispatch(userActions.setUserID(user.account.accountId));
  }
  return setAuthState;
}
