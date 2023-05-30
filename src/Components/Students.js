import React from "react";
import Baseapp from "../Base/Basecomponent";
import { Appstate } from "../Context/AppProvider";



function Students() {

    const { student, setStudent, history } = Appstate();

  function deleteUser(id) {
        const newStudents = student.filter((stud) => stud.id !== id);
        setStudent(newStudents)
    }

    return (
        <Baseapp>
            <div className="conatiner">
                <button className="btn btn-primary " onClick={() => history.push('/newstudent')}>Add a new Student</button>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {student.map((stud, index) => (
                    <div className="card color text-dark m-3" id="card" key={index}>
                        <div className="card-hearder mt-2">{stud.name}</div>
                        <div className="card-body">
                            <p>{stud.class}</p>
                            <p>{stud.state}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary m-1" onClick={() => history.push(`/edit/${stud.id}`)}>Modify</button>

                            
                            <button className="btn btn-outline-danger m-1" onClick={() => deleteUser(stud.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </Baseapp>
    )
}

export default Students;