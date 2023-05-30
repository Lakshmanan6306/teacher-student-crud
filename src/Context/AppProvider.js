import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { studentData } from '../Data/Studentdata';
import { teacherData } from '../Data/teachersData';

const Appcontext = createContext();

function AppProvider({ children }) {
    const [student, setStudent] = useState(studentData);
    const [teachers, setTeachers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        try {
            async function api() {
                const data = await fetch("https://646a0b87183682d6144c45ff.mockapi.io/teacher", { method: "GET" });
                const getData = await data.json();
                console.log(getData);
                setTeachers(getData);
            }
            api();
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <Appcontext.Provider
            value={{ student, setStudent, teachers, setTeachers, history }}>
            {children}
        </Appcontext.Provider>
    )
}

export default AppProvider;

export function Appstate() {
    return useContext(Appcontext)
}