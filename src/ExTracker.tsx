import ExCounter from "./ExCounter";

export interface Exercise {
  label: string;
  reps: number;
}

export type Exercises = Exercise[];

export default function ExTracker({ exercises }: { exercises: Exercises }) {
  return (
    <div className="tracker">
      {exercises.map(({ label, reps }, index) => (
        <ExCounter key={index} label={label} reps={reps} />
      ))}
    </div>
  );
}
