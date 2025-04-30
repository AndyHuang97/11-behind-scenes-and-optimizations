import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    // setChosenCount(newCount);
    // setChosenCount(chosenCount + 1); // this will not work, will get the old
    // value of chosenCount, that is in the case of first render 0

    // state changes with the same function are batched, so the component
    // is not rendered twice
    setChosenCount(newCount);
    setChosenCount(prevCount => prevCount + 1); // this will work, will get the new
    // value of chosenCount
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
