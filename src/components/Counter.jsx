import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((previous) => previous + 5)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;