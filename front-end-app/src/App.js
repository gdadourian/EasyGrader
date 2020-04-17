import React from 'react';
import { Students } from './components/Students'
import { AddStudent } from './components/AddStudent'
import { AddGrade } from './components/AddGrade'
import { Grades } from './components/Grades'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className='App-header'>
        <Students />
        <AddStudent />
        <AddGrade />
      </header>
      <Grades />
    </div>
  );
}

export default App;
