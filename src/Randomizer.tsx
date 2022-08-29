import { useState, useLayoutEffect } from "react";

function Randomizer() {
  const [value, setValue] = useState<number>(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.round(100 * Math.random()));
    }
  }, [value]);

  console.log(value);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
}

export default Randomizer;
