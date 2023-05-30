import React, { useEffect, useState } from "react";
import Baseapp from "../Base/Basecomponent";
import { useParams } from 'react-router-dom';
import { Appstate } from "../Context/AppProvider";


function Editteacher() {
    const { teachers, setTeachers, history } = Appstate();

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


    async function modifydata() {

        const teacherindex = teachers.findIndex((teach) => teach.id === id);
        const newdata = {
            id: idx,
            name,
            Subject: subject,
            Experience: exp
        }
        try {
            const response = await fetch(`https://646a0b87183682d6144c45ff.mockapi.io/teacher/${idx}`, {
                method: "PUT",
                body: JSON.stringify(newdata),
                headers: { "Content-Type": "application/json" }
            })
            const data = await response.json();
            console.log(data)
            teachers[teacherindex] = newdata;
            setTeachers([...teachers])
            history.push('/teachers')
        } catch (error) {
            console.log(error)
        }
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