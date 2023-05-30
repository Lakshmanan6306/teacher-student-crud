import React, { useState } from "react";
import Baseapp from "../Base/Basecomponent";
import { Appstate } from "../Context/AppProvider";

function Newstudent() {
    const {student,setStudent,history} = Appstate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [clas, setClas] = useState("");
    const [address, setAddress] = useState("");

    function newdata() {
        const newStudent = {
            id,
            name,
            class: clas,
            state:address
        }
        setStudent([...student,newStudent]);
        history.push("/students")
    }
    return (
        <Baseapp>
            <div className="m-5">
                <div className="input">
                    <input className="form-control m-2" placeholder="Id" type="number" onChange={(e) => setId(e.target.value)} />
                    <input className="form-control m-2" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                    <input className="form-control m-2" placeholder="Enter Your Class" onChange={(e) => setClas(e.target.value)} />
                    <input className="form-control m-2" placeholder="Enter Your address" onChange={(e) => setAddress(e.target.value)} />
                    <button className="btn btn-warning px-5" onClick={() => newdata()}>Add New Student</button>
                </div>
            </div>
        </Baseapp>
    )
}

export default Newstudent;