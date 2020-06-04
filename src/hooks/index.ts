import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useMountEffect = (effect: React.EffectCallback) => useEffect(effect, []);

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

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
