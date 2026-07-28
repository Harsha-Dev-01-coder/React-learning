import { useState } from "react";

function InputExample() {

    const [name, setName] = useState("");

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                    handleChange(event);
                }}
            />

            <h2>{name}</h2>
        </>
    );

}

export default InputExample;