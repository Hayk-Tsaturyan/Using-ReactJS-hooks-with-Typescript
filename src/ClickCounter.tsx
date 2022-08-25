import { useState } from "react";

function ClickCounter({ initialCount }: { initialCount?: number }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        Count: {count}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(Math.round(100 * Math.random()))}>
          Random
        </button>
      </p>
    </div>
  );
}

export default ClickCounter;
