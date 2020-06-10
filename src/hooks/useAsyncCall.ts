import { useState } from "react"

export const useAsyncCall = (): [boolean, (call: () => Promise<void | boolean>) => Promise<void>] => {
  const [running, setRunning] = useState(false);

  const asyncCall = async (call: () => Promise<void | boolean>) => {
    if (running) return;
    setRunning(true);
    let callsCompleted: void | boolean = false;

    try {
      callsCompleted = await call();
    } catch (e) {
      console.error(e);
      if (e.response) console.log(e.response);
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
