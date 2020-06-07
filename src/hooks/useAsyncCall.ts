import { useState } from "react"

export const useAsyncCall = (): [boolean, (call: () => Promise<void>) => Promise<void>] => {
  const [running, setRunning] = useState(false);

  const asyncCall = async (call: () => Promise<void>) => {
    if (running) return;
    setRunning(true);

    try {
      await call();
    } catch (e) {
      console.error(e);
    }

    setRunning(false);
  }

  return [
    running,
    asyncCall,
  ];
}
