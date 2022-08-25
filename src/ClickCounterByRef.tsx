import React, { useState, useEffect, useRef } from "react";

function ClickCounterByRef() {
  const [counter, setCounter] = useState(0);

  const ref: any  = useRef();
  useEffect(() => {
    ref.current = {
      counter: 0,
    };
  }, []);

  return (
    <div>
      <button onClick={() => ref.current.counter++}>
        Clicked {counter} times
      </button>
      <br />
      <button onClick={() => setCounter(ref.current.counter)}>Refresh</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}

export default ClickCounterByRef;