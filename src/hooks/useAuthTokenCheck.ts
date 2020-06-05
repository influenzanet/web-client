import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuthTokenCheck = () => {
  const apiState = useSelector((state: RootState) => state.api);

  const now = new Date().getTime();

  if ((apiState.accessToken && apiState.accessToken.length > 0 && now < apiState.expiresAt)) {
    return true;
  } else {
    return false;
  }
}
