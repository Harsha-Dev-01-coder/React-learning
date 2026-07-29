import { useState } from "react";

function FruitList() {

    const [fruits, setFruits] = useState([
        "Apple",
        "Mango",
        "Orange"
    ]);

    return (
        <div>
            {fruits.map((fruit, index) => (
                <h2 key={index}>{fruit}</h2>
            ))}
        </div>
    );
}

export default FruitList;