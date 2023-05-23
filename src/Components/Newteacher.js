import React, { useState } from "react";
import Baseapp from "../Base/Basecomponent";


function Newteacher({ teachers, setTeachers, history }) {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [exp,setExp] = useState("");

    function newuser(){
        const newMentor = {
            id,
            name,
            Subject:subject,
            Experience:exp
        }
        setTeachers([...teachers,newMentor]);
        history.push('/teachers')
    }

    return (
        <Baseapp>
            <div className="input container m-5">
                <input className="form-control m-2" placeholder="Enter your Id" type="number" onChange={(e)=>setId(e.target.value)}/>
                <input className="form-control m-2" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                <input className="form-control m-2" placeholder="Enter your Subject" onChange={(e)=>setSubject(e.target.value)}/>
                <input className="form-control m-2" placeholder="Enter your Experience" type="number" onChange={(e)=>setExp(e.target.value)}/>
                <button className="btn btn-warning px-5" onClick={()=>newuser()}>Add Mentor</button>
            </div>
        </Baseapp>
    )

}

export default Newteacher;