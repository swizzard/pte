import "./App.css";
import Timer from "./Timer";
import ExCounter from "./ExCounter";

function App() {
  return (
    <div className="container">
      <h1>PT Exercise Tracker</h1>
      <div className="left">
        <Timer duration={30000} />
      </div>
      <div className="right">
        <ExCounter label="ITB Right" reps={3} />
        <ExCounter label="ITB Left" reps={3} />
        <ExCounter label="Piriformis Right" reps={3} />
        <ExCounter label="Piriformis Left" reps={3} />
        <ExCounter label="Butterfly" reps={3} />
        <ExCounter label="3-Way Kick Left" reps={5} />
        <ExCounter label="3-Way Kick Right" reps={5} />
        <ExCounter label="Marching w/Resistance" reps={5} />
        <ExCounter label="Squats" reps={5} />
        <ExCounter label="Clamshell Right" reps={5} />
        <ExCounter label="Clamshell Left" reps={5} />
      </div>
    </div>
  );
}

export default App;
