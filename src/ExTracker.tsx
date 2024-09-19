import { useReducer } from "react";
import {
  initialize,
  reducer,
  incr,
  reset,
  resetAll,
  Exercises,
} from "./reducer";
import ExCounter from "./ExCounter";

export default function ExTracker({ exercises }: { exercises: Exercises }) {
  const [state, dispatch] = useReducer(reducer, exercises, initialize);
  return (
    <div className="tracker">
      <div className="ex">
        <button className="reset-all" onClick={() => dispatch(resetAll())}>
          Reset All
        </button>
      </div>
      {state.map(({ label, currentReps, totalReps }, index) => (
        <ExCounter
          key={index}
          label={label}
          currentReps={currentReps}
          totalReps={totalReps}
          incrFn={() => dispatch(incr(index))}
          resetFn={() => dispatch(reset(index))}
        />
      ))}
    </div>
  );
}
