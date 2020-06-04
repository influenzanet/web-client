import { useSelector } from "react-redux";
import { RootState } from "../store";
import { urlWithRedirect } from "../routes/utils/routeUtils";
import { HomePaths } from "../routes";

export const useProfileUrl = (targetUrl: string): string => {
  const profiles = useSelector((state: RootState) => state.user.currentUser.profiles);
  const profileCount = (profiles) ? profiles.length : 0;

  if (profileCount > 1) {
    return urlWithRedirect(HomePaths.Profiles, targetUrl);
  } else {
    return targetUrl;
  }
}
