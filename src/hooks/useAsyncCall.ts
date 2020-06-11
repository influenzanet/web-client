import { useState } from "react"

export const useAsyncCall = (): [boolean, (call: () => Promise<void | boolean>, onError?: (e: any) => void) => Promise<void>] => {
  const [running, setRunning] = useState(false);

  const asyncCall = async (call: () => Promise<void | boolean>, onError?: (e: any) => void) => {
    if (running) return;
    setRunning(true);
    let callsCompleted: void | boolean = false;

    try {
      callsCompleted = await call();
    } catch (e) {
      console.error(e);
      if (e.response) console.log(e.response);
      if (onError) onError(e);
    }

    if (!callsCompleted) {
      setRunning(false);
    }
  }

  return [
    running,
    asyncCall,
  ];
}
