import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [box, setBox] = useState(new Array(9).fill(null));
  const signRef = useRef(null);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const winningPermutataion = useRef([[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,7]]);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);

  const handleClick = (index) => {
    const updatebox = [...box];
    const lastSignUsed = signRef.current;
    const newSignToUse = lastSignUsed == "X" ? "0" : "X";
    updatebox[index] = newSignToUse;
    signRef.current = newSignToUse;
    setBox(updatebox);
    checkWinner(updatebox, newSignToUse);
  };

  const checkWinner = (box, newSignToUse) => {
    const winningComb = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];

    for(let i =0; i<winningComb.length; i++) {
      let [a,b,c] = winningComb[i];

      if(box[a] && box[a] == box[b] && box[a] == box[c]) {
        setWinner(newSignToUse);
        return true;
      }
    }

    if(!box.includes(null)) {
      setDraw(true);
      return;
    }
  }

  const handleRestart = () => {
    let restartBox = new Array(9).fill(null);
    setBox(restartBox);
    setWinner(null);
    setDraw(false);
    setSelectedSymbol(null)
  }

  const handleStartingSign = (symbol) => {
    const selectedStartingSymbol = symbol;
    setSelectedSymbol(selectedStartingSymbol);
  }

  return (
    <div className="container">
      {(winner || draw ) && <div>
        <h1>{`Game won by: ${winner}`}</h1>
        <button onClick={handleRestart}>Restart</button>
        </div>
      }
      {draw && <h1>Draw</h1>}

      {selectedSymbol && <h2>Next move: {selectedSymbol}</h2>}
      <h2>Choose Starting Symbol</h2>
      <div className={`${selectedSymbol} ? 'starting-symbol-hide' : "starting-symbol-show" `}>
        <button onClick={() => handleStartingSign("0")}>0</button>
        <button onClick={() => handleStartingSign("X")}>X</button>
      </div>

      <div className="main">
        {box.map((elem, index) => {
          return (
            <button
              key={`box-${index}`}
              className="box"
              onClick={() => handleClick(index)}
              disabled={elem}
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
