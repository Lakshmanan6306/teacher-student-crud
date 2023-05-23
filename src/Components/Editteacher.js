import React, { useEffect, useState } from "react";
import Baseapp from "../Base/Basecomponent";
import { useParams } from 'react-router-dom';


function Editteacher({ teachers, setTeachers, history }) {
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [exp, setExp] = useState("");

    const { id } = useParams();
    const data = teachers.find((per) => per.id === id)
    useEffect(() => (
        setIdx(data.id),
        setName(data.name),
        setSubject(data.Subject),
        setExp(data.Experience)
    ), [])


    function modifydata() {

        const teacherindex = teachers.findIndex((teach)=>teach.id === id);
        const newdata = {
            id:idx,
            name,
            Subject:subject,
            Experience:exp
        }
        teachers[teacherindex] = newdata;
        setTeachers([...teachers])
        history.push('/teachers')
    }

    return (
        <Baseapp>
            <div className="input container mt-5" >
                <input className="form-control m-2" value={idx} onChange={(e) => setIdx(e.target.value)} />
                <input className="form-control m-2" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="form-control m-2" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <input className="form-control m-2" value={exp} onChange={(e) => setExp(e.target.value)} />
                <button className="btn btn-primary px-5 m-2" onClick={() => modifydata()}> Modify Details</button>
            </div>

        </Baseapp>
    )
}

export default Editteacher;