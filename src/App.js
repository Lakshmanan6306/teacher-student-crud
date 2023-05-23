import './App.css';
import { Home } from './Components/Home';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import Students from './Components/Students';
import Teachers from './Components/Teachers';
import Newstudent from './Components/Newstudent';
import { useState } from 'react';
import { studentData } from './Data/Studentdata';
import { useHistory } from "react-router-dom";
import Editstudent from './Components/Editstudent';
import { teacherData } from './Data/teachersData';
import Newteacher from './Components/Newteacher';
import Editteacher from './Components/Editteacher';

function App() {
  const [student, setStudent] = useState(studentData);
  const [teachers, setTeachers] = useState(teacherData);
  const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/students">
          <Students
            student={student}
            setStudent={setStudent}
            history={history}
          />
        </Route>

        <Route path="/teachers">
          <Teachers
            teachers={teachers}
            setTeachers={setTeachers}
            history={history}
          />
        </Route>

        <Route path="/newstudent">
          <Newstudent
            student={student}
            setStudent={setStudent}
            history={history}
          />
        </Route>

        <Route path="/edit/:id">
          <Editstudent
            student={student}
            setStudent={setStudent}
            history={history}
          />
        </Route>

        <Route path='/newteacher'>
          <Newteacher
            teachers={teachers}
            setTeachers={setTeachers}
            history={history}
          />
        </Route>

        <Route path='/editteacher/:id'>
          <Editteacher
            teachers={teachers}
            setTeachers={setTeachers}
            history={history}
          />
        </Route>


      </Switch>

    </div>
  );
}

export default App;
