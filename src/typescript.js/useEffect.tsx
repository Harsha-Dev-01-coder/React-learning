import { useEffect } from "react";

function UseEffect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h2>Check the console</h2>;
}

export default UseEffect;