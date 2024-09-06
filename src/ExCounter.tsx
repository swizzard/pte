import { useState, useEffect } from "react";

export interface ExCounterProps {
  label: string;
  reps: number;
}

export default function ExCounter({ label, reps }: ExCounterProps) {
  const [nDone, setNDone] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (nDone === reps) {
      setDone(true);
    }
  }, [nDone, reps]);

  return (
    <div
      className={`ex ${nDone > 0 ? "ex-started" : ""} ${done ? "ex-done" : ""}`}
    >
      <h2>{label}</h2>
      <div>
        {Array(reps)
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              disabled={nDone > i}
              onClick={() => setNDone(nDone + 1)}
            >
              ✔️
            </button>
          ))}
      </div>
      <div>
        <button
          onClick={() => {
            setNDone(0);
            setDone(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
