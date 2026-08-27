import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  increaseBy
} from "../store/slices/counterSlice";

function ReduxCounter() {
  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        +1
      </button>

      <button onClick={() => dispatch(decrement())}>
        -1
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <button onClick={() => dispatch(increaseBy(5))}>
        IncreaseBy
      </button>
    </div>
  );
}

export default ReduxCounter;