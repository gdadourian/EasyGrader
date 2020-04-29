import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Students } from './components/Students'
import { Grades } from './components/Grades'
import { StudentForm } from './components/StudentForm'
import { GradeForm } from './components/GradeForm'
import './App.css';
import './components/Button.css'

function App() {
  const [ selectedStudent, setSelectedStudent ] = useState()

  return (
    <div className="App">
      <Router>
        <div>
          <h1>EasyGrader</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/students">Add Student</Link>
              </li>
              {selectedStudent && <li>
                <Link to="/grades">Add Grade</Link>
              </li>}
            </ul>
          </nav>

          <Switch>
            <Route path="/students">
              <StudentForm />
            </Route>
            <Route path="/grades">
              <GradeForm selectedStudent={selectedStudent} />
            </Route>
            <Route path="/">
              <header className='App-header'>
                <Students setSelectedStudent={setSelectedStudent} selectedStudent={selectedStudent} />
              </header>
              <Grades selectedStudent={selectedStudent} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
