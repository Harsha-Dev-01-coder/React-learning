import { useState } from "react";

function UserInfo() {
    const [name] = useState("Champ");
    const [age] = useState(18);
    const [city] = useState("Hyderabad");

    return (
        <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{city}</h2>
        </div>
    );
}

export default UserInfo;