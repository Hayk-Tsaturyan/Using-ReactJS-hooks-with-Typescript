import React, { useRef } from "react";
import { CounterByImperativeHandleInner } from "./counter_for_ImperativeHandle/CounterByImperativeHandleInner";

export function CounterByImperativeHandleOuter() {
  const ref: any = useRef();

  return (
    <>
      <CounterByImperativeHandleInner ref={ref} />
      <button onClick={() => ref.current.increment()}>Outside Button</button>
    </>
  );
}
