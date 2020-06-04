import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuthTokenCheck = () => {
  const apiState = useSelector((state: RootState) => state.api);

  const now = new Date().getTime();

  if ((apiState.accessToken && apiState.accessToken.length > 0 && now < apiState.expiresAt) ||
    (apiState.refreshToken && apiState.refreshToken.length > 0)) {
    return true;
  } else {
    return false;
  }
}
