export interface Exercise {
  label: string;
  reps: number;
}

export type Exercises = Exercise[];
interface ReducerExercise {
  label: string;
  currentReps: number;
  totalReps: number;
}

type REs = ReducerExercise[];

enum ActionType {
  INCREMENT = "INCREMENT",
  RESET = "RESET",
}
interface Action {
  type: ActionType;
  index?: number;
}

function doIncr(ix: number, state: REs): REs {
  const newState = [...state];
  newState[ix] = {
    ...newState[ix],
    currentReps: newState[ix].currentReps + 1,
  };
  return newState;
}

function doResetAt(ix: number, state: REs): REs {
  const newState = [...state];
  newState[ix] = {
    ...newState[ix],
    currentReps: 0,
  };
  return newState;
}

function doResetAll(state: REs): REs {
  return state.map((ex) => ({ ...ex, currentReps: 0 }));
}

export function reducer(state: REs, action: Action): REs {
  switch (action.type) {
    case ActionType.RESET:
      if (action.index === undefined) {
        return doResetAll(state);
      }
      return doResetAt(action.index, state);
    case ActionType.INCREMENT:
      if (action.index === undefined) {
        throw new Error("INCREMENT action must have an index");
      }
      return doIncr(action.index, state);
    default:
      throw new Error("Unknown action");
  }
}

export function incr(index: number) {
  return { type: ActionType.INCREMENT, index };
}

export function reset(index: number) {
  return { type: ActionType.RESET, index };
}

export function resetAll() {
  return { type: ActionType.RESET };
}

export function initialize(exercises: Exercises): REs {
  return exercises.map(({ label, reps }) => ({
    label,
    totalReps: reps,
    currentReps: 0,
  }));
}
