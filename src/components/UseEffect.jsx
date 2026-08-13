import { useEffect } from "react";

function UseEffect() {
    useEffect (() => {

        const timer = setInterval(() => {
            console.log("Running...");
        }, 1000);

        return () => {
            clearInterval(timer);
        }

    }, []);
    
}

export default UseEffect;