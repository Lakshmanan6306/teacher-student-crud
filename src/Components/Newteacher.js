import React, { useState } from "react";
import Baseapp from "../Base/Basecomponent";
import { Appstate } from "../Context/AppProvider";


function Newteacher() {
    const { teachers, setTeachers, history } = Appstate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [exp, setExp] = useState("");

    async function newuser() {
        const newMentor = {
            id,
            name,
            Subject: subject,
            Experience: exp
        }
        try {
            const response = await fetch('https://646a0b87183682d6144c45ff.mockapi.io/teacher',{
                method:"POST",
                body: JSON.stringify(newMentor),
                headers:{"content-Type":"application/json"}
            })
            const data = await response.json();
            console.log(data);
            setTeachers([...teachers, newMentor]);
            history.push('/teachers')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Baseapp>
            <div className="input container m-5">
                <input className="form-control m-2" placeholder="Enter your Id" type="number" onChange={(e) => setId(e.target.value)} />
                <input className="form-control m-2" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)} />
                <input className="form-control m-2" placeholder="Enter your Subject" onChange={(e) => setSubject(e.target.value)} />
                <input className="form-control m-2" placeholder="Enter your Experience" type="number" onChange={(e) => setExp(e.target.value)} />
                <button className="btn btn-warning px-5" onClick={() => newuser()}>Add Mentor</button>
            </div>
        </Baseapp>
    )

}

export default Newteacher;