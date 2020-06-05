import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuthTokenCheck = () => {
  const apiState = useSelector((state: RootState) => state.api);

  if (apiState.accessToken && apiState.accessToken.length > 0) {
    return true;
  }
  return false;
}
