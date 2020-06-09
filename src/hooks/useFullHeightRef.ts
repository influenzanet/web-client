import { useRef } from "react";
import { useMountEffect } from ".";

export const useFullHeightRef = () => {
  const ref = useRef<any>(null);

  useMountEffect(() => {
    if (ref.current) {
      ref.current.style.minHeight = `calc(100vh - ${ref.current.offsetTop}px)`;
    }
  });

  return ref;
}
