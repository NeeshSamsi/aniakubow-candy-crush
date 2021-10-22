import { useEffect, useState } from "react";

const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const checkForColumnThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, (i + width) * 2];
      const decidedColor = currentColorArrangement[i];

      if (columnOfThree.every((square) => currentColorArrangement[square] === decidedColor)) {
        columnOfThree.forEach((square) => (currentColorArrangement[square] = ""));
      }
    }
  };

  const createBoard = () => {
    const randomColorArrangement = [];

    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }

    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  console.log(currentColorArrangement);

  return (
    <div className="App">
      <div className="game">
        {currentColorArrangement.map((candyColor, i) => (
          <img key={i} style={{ backgroundColor: candyColor }} alt={`${candyColor} square`} />
        ))}
      </div>
    </div>
  );
};

export default App;
