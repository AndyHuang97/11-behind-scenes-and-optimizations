import { useState } from "react";

import { log } from "../../log.js";

function HistoryItem({ count }) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }) {
  log("<CounterHistory /> rendered", 2);

  // state is scoped to the component and the key of the component in the tree
  // if a list grows or shrinks, the state of the component is preserved
  // if the key is positional, the state is not preserved
  // if the key is a unique id, the state is preserved
  // this can improve performance
  // by not having to re-render the component when the list changes
  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
