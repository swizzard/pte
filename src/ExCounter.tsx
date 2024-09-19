export interface ExCounterProps {
  label: string;
  currentReps: number;
  totalReps: number;
  incrFn: () => void;
  resetFn: () => void;
}

export default function ExCounter({
  label,
  currentReps,
  totalReps,
  incrFn,
  resetFn,
}: ExCounterProps) {
  return (
    <div
      className={`ex ${currentReps > 0 ? "ex-started" : ""} ${currentReps >= totalReps ? "ex-done" : ""}`}
    >
      <h2>{label}</h2>
      <div>
        {Array(totalReps)
          .fill(0)
          .map((_, i) => (
            <button key={i} disabled={currentReps > i} onClick={() => incrFn()}>
              ✔️
            </button>
          ))}
      </div>
      <div>
        <button onClick={() => resetFn()}>Reset</button>
      </div>
    </div>
  );
}
