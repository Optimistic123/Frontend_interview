import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState([]);

  const generateBox = () => {
    let boxArr = [];
    for (let i = 0; i < 8; i++) {
      let temp = [];
      for (let j = 0; j < 8; j++) {
        let backColor = (i + j) % 2 === 0 ? "red" : "Green";
        let box = (
          <span
            class="box"
            style={{
              height: "20px",
              width: "20px",
              backgroundColor: backColor,
              margin: "2px"
            }}
          ></span>
        );
        temp.push(box);
      }
      boxArr.push(temp);
    }
    setCount(boxArr);
  };

  useEffect(() => {
    generateBox();
  }, []);

  return (
    <div className="App">
      <h1>Chess board</h1>
      {count.map((boxes) => {
        return (
          <div class="get_color" key="ind">
            {boxes.map((box) => {
              return box;
            })}
          </div>
        );
      })}
    </div>
  );
}
