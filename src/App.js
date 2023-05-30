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
 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/students">
          <Students/>
        </Route>

        <Route path="/teachers">
          <Teachers/>
        </Route>

        <Route path="/newstudent">
          <Newstudent/>
        </Route>

        <Route path="/edit/:id">
          <Editstudent/>
        </Route>

        <Route path='/newteacher'>
          <Newteacher/>
        </Route>

        <Route path='/editteacher/:id'>
          <Editteacher/>
        </Route>


      </Switch>

    </div>
  );
}

export default App;
