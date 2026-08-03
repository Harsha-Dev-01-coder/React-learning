import { useState } from "react";

function Objects() {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Chmap",
            course: "Frontend"
        },
        {
            id: 2,
            name: "Harsha",
            course: "React"
        }
    ]);

    function addStudent() {
        setStudents([
            ...students,
            {
                id: 3,
                name: "Ram",
                course: "JavaScript"
            }
        ]);
    }

    function updateCourse() {
        setStudents(
                students.map((student) => 
                    student.id === 2
                      ? {
                        ...student,
                        course: "React Advanced"
                        }
                    :student
                )
            );
    }

    function filter() {
        setStudents(
            students.filter(
                (student) => student.id !== 1
            )
        );

    }

    return(
        <div>
            {students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <h2>{student.course}</h2>
                </div>
            ))}

            <button onClick={addStudent}>
                Add Student
            </button>

            <button onClick={updateCourse}>
                Update Course
            </button>

            <button onClick={filter}>
                filter
            </button>
        </div>
    );
}

export default Objects;