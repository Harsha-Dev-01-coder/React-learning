import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
    

        <button onClick={() => setCount(previous => previous + 5)}>
            Increase
        </button>
    </div>
  );
}

export default Counter;