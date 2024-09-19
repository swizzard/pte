import "./App.css";
import Timer from "./Timer";
import ExTracker from "./ExTracker";
import exercises from "./exercises";

function App() {
  return (
    <div className="container">
      <h1>PT Exercise Tracker</h1>
      <div className="left">
        <Timer duration={30000} />
      </div>
      <div className="right">
        <ExTracker exercises={exercises} />
      </div>
    </div>
  );
}

export default App;
