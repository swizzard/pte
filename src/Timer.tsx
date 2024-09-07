import { useEffect, useState } from "react";
import alarmSound from "./assets/mixkit-game-notification-wave-alarm-987.wav";

export interface TimerProps {
  duration: number;
}

export default function Timer({ duration }: TimerProps) {
  const [started, setStarted] = useState(false);

  const audioEl = document.getElementById("audioElement") as HTMLAudioElement;

  useEffect(() => {
    if (started) {
      const timeoutId = setTimeout(() => {
        setStarted(false);
        audioEl.play();
      }, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [started]);

  return (
    <div className={`timer ${started ? "timer-running" : ""}`}>
      <h2>Timer</h2>
      <button disabled={started} onClick={() => setStarted(true)}>
        Start
      </button>
      <audio id="audioElement" autoPlay={false}>
        <source src={alarmSound} type="audio/wav" />
      </audio>
      {started && (
        <p>Timer is running for {Math.floor(duration / 1000)} seconds</p>
      )}
    </div>
  );
}
