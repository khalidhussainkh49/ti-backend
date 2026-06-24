import { useEffect } from "react";

export default function useSessionTimeout(logout) {
  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        logout();
      }, 30 * 60 * 1000); // 30 minutes
    };

    const events = [
      "mousemove",
      "keydown",
      "click",
      "scroll",
    ];

    events.forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer();

    return () => {
      clearTimeout(timer);

      events.forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [logout]);
}