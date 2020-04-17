import React, { useState } from 'react';
import { Students } from './components/Students'
import { AddStudent } from './components/AddStudent'
import { AddGrade } from './components/AddGrade'
import { Grades } from './components/Grades'
import './App.css';

function App() {
  const [ selectedStudent, setSelectedStudent ] = useState(1)

  return (
    <div className="App">
      <header className='App-header'>
        <Students setSelectedStudent={setSelectedStudent} />
        <AddStudent />
        <AddGrade />
      </header>
      <Grades selectedStudent={selectedStudent} />
    </div>
  );
}

export default App;
