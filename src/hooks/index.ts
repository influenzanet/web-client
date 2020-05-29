import { useEffect } from "react";

export const useMountEffect = (effect: React.EffectCallback) => useEffect(effect, []);
