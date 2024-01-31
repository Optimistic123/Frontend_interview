import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [box, setBox] = useState(new Array(9).fill(""));
  const signRef = useRef("X");
  const winningPermutataion = useRef([[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,7]]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log("Winner: ", signRef.current)
  }, [winner])

  const handleClick = (index) => {
    const updatebox = [...box];
    const lastSignUsed = signRef.current;
    const newSignToUse = lastSignUsed == "X" ? "0" : "X";
    updatebox[index] = newSignToUse;
    signRef.current = newSignToUse;
    setBox(updatebox);
  };

  return (
    <div className="container">
      <div className="main">
        {box.map((elem, index) => {
          return (
            <button
              key={`box-${index}`}
              className="box"
              onClick={() => handleClick(index)}
              disabled={elem !== ""}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
