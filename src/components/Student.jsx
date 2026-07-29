import { useState } from "react";

function Student() {
    const [student, setStudent] = useState({
        name: "Champ",
        age: 18
    });

    return (
        <div>
            <h2>{student.name}</h2>
            <h2>{student.age}</h2>
        
            <button 
                onClick={() => 
                    setStudent({
                        ...student,
                        age: 19
                    })
                }
            >
                Change Age
            </button>
        </div>
    );
}

export default Student;