import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Students } from './components/Students'
import { AddStudent } from './components/AddStudent'
import { AddGrade } from './components/AddGrade'
import { Grades } from './components/Grades'
import './App.css';

function App() {
  const [ selectedStudent, setSelectedStudent ] = useState(1)

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/students">Add Student</Link>
              </li>
              <li>
                <Link to="/grades">Add Grade</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/students">
              <div>Add student form</div>
            </Route>
            <Route path="/grades">
              <div>Add grade form</div>
            </Route>
            <Route path="/">
              <header className='App-header'>
                <Students setSelectedStudent={setSelectedStudent} />
                <AddStudent />
                <AddGrade />
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
