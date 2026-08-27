import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case "increment":
    return state + 1;

    case "decrement":
    return state - 1;
    
    case "IncreaseBy":
    return state + action.amount;

    case "reset":
    return 0;

    default:
    return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => 
        dispatch({ 
            type: "IncreaseBy",
            amount: 5
            })
          }
        >
            Increase by 5
        </button>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrease
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default Counter;