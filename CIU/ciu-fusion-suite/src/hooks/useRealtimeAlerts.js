import { useEffect, useState } from "react";

export default function useRealtimeAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const fakeAlert = {
        id: Date.now(),
        type: ["CARGO_RISK", "CYBER_THREAT", "ENTITY_MATCH"][
          Math.floor(Math.random() * 3)
        ],
        message:
          "High-risk intelligence event detected",
        severity: ["LOW", "MEDIUM", "HIGH"][
          Math.floor(Math.random() * 3)
        ],
        time: new Date().toISOString(),
      };

      setAlerts((prev) => [
        fakeAlert,
        ...prev.slice(0, 19),
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return alerts;
}