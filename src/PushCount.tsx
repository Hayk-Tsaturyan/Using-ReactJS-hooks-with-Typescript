import { useState, useEffect } from "react";

function PushCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "You pushed {count} times";
  });

  return (
    <div>
      {count < 5 ? (
        <p>
          <button onClick={() => setCount(count + 1)}>Push me</button>
          <p>You pushed {count} times</p>
        </p>
      ) : (
        <p>
          <button onClick={() => setCount(count + 1)}>Push me</button>
          <p>You pushed {count} times, it's enough</p>
        </p>
      )}
    </div>
  );
}

export default PushCount;
