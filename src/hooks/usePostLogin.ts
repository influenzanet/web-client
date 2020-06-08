import { useHistory } from "react-router";
import { useProfileUrl } from ".";
import { useRedirectUrl } from ".";
import { HomePaths, AuthPagesPaths } from "../routes";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState, useEffect } from "react";

export const usePostLogin = () => {
  const history = useHistory();
  const authenticatedUrl = useProfileUrl(useRedirectUrl(HomePaths.Dashboard));
  const accountConfirmedAt = useSelector((state: RootState) => state.user.currentUser.account.accountConfirmedAt);
  const [loginComplete, setLoginComplete] = useState(false);

  useEffect(() => {
    if (loginComplete) {
      if (accountConfirmedAt && Number(accountConfirmedAt) > 0) {
        history.push(authenticatedUrl);
      } else {
        history.push(AuthPagesPaths.SignupSuccess);
      }
    }
    // We only want to run this if loginComplete changes to true and under no other circumstances!
    // eslint-disable-next-line
  }, [loginComplete]);

  return () => {
    setLoginComplete(true);
  }
}
