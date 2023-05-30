import React from "react";
import Baseapp from "../Base/Basecomponent";
import { Appstate } from "../Context/AppProvider";


function Teachers() {
  const { teachers, setTeachers, history } = Appstate();


  async function deleteTeacher(id) {
      try {
        const response = await fetch(`https://646a0b87183682d6144c45ff.mockapi.io/teacher/${id}`,{
          method:"DELETE"
        })  
        const data = await response.json();
        console.log(data);
        const removeTeacher = teachers.filter((per) => per.id !== id)
        setTeachers(removeTeacher)
      } catch (error) {
        console.log(error)
      }

 
  }

  return (
    <Baseapp>

      <div className="container">
        <button className="btn btn-primary float-end m-2" onClick={() => history.push('/newteacher')}>Add New Mentor</button>
      </div>
      <table className="table container table-warning table-striped">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Mentor Name</th>
            <th>Subject</th>
            <th>Experience</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {
            teachers.map((teach, index) => (
              <tr className="p-1" key={index}>
                <td>{teach.id}</td>
                <td>{teach.name}</td>
                <td>{teach.Subject}</td>
                <td>{teach.Experience}</td>
                <td>
                  <button className="btn btn-outline-success m-1" onClick={() => history.push(`/editteacher/${teach.id}`)}>Edit</button>
                  <button className="btn btn-outline-danger p-1.5 m-1" onClick={() => deleteTeacher(teach.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Baseapp>
  )
}

export default Teachers;