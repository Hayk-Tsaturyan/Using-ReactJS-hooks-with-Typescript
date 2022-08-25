import React, { useState, useEffect, useCallback } from "react";

function WelcomeWithClicker() {
  const [message, setMessage] = useState(
    "If I use useCallback wrong, this alert will come again"
  );
  const [counter, setCounter] = useState(0);

  const welcome = useCallback((text: string) => {
    alert(text);
  }, []);

  useEffect(() => {
    welcome(message);
  }, [welcome, message]);

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Clicked {counter} times
    </button>
  );
}

export default WelcomeWithClicker;
