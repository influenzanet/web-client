import { useQuery } from ".";
import { redirectParameter } from "../routes/utils/routeUtils";

export const useRedirectUrl = (defaultUrl: string) => {
  const query = useQuery();
  const redirectUrl = query.get(redirectParameter);

  if (redirectUrl && redirectUrl.length > 0) {
    return redirectUrl;
  } else {
    return defaultUrl;
  }
}
