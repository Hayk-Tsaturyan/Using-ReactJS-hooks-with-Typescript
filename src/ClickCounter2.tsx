import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(
  state: { count: number },
  action: { type: string; payload: number }
) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    case "random":
      return {
        ...state,
        count: Math.round(100 * Math.random()),
      };
    default:
      throw new Error();
  }
}

function ClickCounter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <p>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "random", payload: 0 })}>
        Random
      </button>
    </p>
  );
}

export default ClickCounter2;
