import { useEffect } from "react";
import { useLocation } from "react-router";

export const useMountEffect = (effect: React.EffectCallback) => useEffect(effect, []);

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
