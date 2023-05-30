import React, { useEffect, useState } from "react";
import Baseapp from "../Base/Basecomponent";
import {useParams} from "react-router-dom";
import { Appstate } from "../Context/AppProvider";

function Editstudent() {
    const {student,setStudent,history} = Appstate();


    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [clas, setClas] = useState("");
    const [address, setAddress] = useState("");

    const {id} = useParams();


    const selectedStudent = student.find((stud)=>stud.id === id);

    useEffect(()=>(
        setIdx(selectedStudent.id),
        setName(selectedStudent.name),
        setClas(selectedStudent.class),
        setAddress(selectedStudent.state)
    ),[])

    function modifydata(){

        const editIndex = student.findIndex((stud)=>stud.id === id);
       
        const editedData = {
            id:idx,
            name,
            class:clas,
            state:address
        }
        student[editIndex] = editedData;
        setStudent([...student]);
        history.push("/students")
    }

    return (
        <Baseapp>
            <div className="m-5">
                <div className="input">
                    <input className="form-control m-2" placeholder="Id" type="number" value={idx} onChange={(e) => setIdx(e.target.value)} />
                    <input className="form-control m-2" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="form-control m-2" placeholder="Enter Your Class" value={clas} onChange={(e) => setClas(e.target.value)} />
                    <input className="form-control m-2" placeholder="Enter Your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <button className="btn btn-warning px-5" onClick={()=>modifydata()} >Modify</button>
                </div>
            </div>
        </Baseapp>
    )

}

export default Editstudent;