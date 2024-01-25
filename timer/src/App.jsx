import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (start) {
      let intervalId = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      intervalRef.current = intervalId;
    }
    return () => clearTimeout(intervalRef.current);
  }, [count, start]);

  /**
   * setInterval
   */
  const handleStart = () => {
    let intervalId = setInterval(() => {
      setCount((prevcount) => prevcount + 1);
    }, 1000);
    intervalRef.current = intervalId;
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleRestart = () => {
    clearInterval(intervalRef.current);
    setCount(0);
  };

  /**
   * setTimeout
   */

  // const handleStart = () => {
  //   setStart(true);
  // };

  // const handleStop = () => {
  //   setStart(false);
  //   clearTimeout(intervalRef.current);
  // };

  // const handleRestart = () => {
  //   clearTimeout(intervalRef.current);
  //   setCount(0);
  //   setStart(false);
  // };

  return (
    <>
      <h1>Timer app : {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}

export default App;
