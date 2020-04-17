import React, { useState, useEffect } from "react";
import './Students.css';

export const Students = ({ setSelectedStudent }) => {
    const [students, setStudents]=useState([])
    
    useEffect(()=>{
        async function fetchStudents() {
            const res = await fetch('https://my.api.mockaroo.com/students?key=f1d20b10');
            res.json().then(res => setStudents(res))
        }
        if (students.length === 0) {
            fetchStudents()
        }
        console.log('fetch students effect')
    }, [students])
  
    if (!students.length) {
        return (<div>Students loading...</div>)
    }
    return (
        <div>
            <label for='students'>Select Student:</label>
            <select id='students' onChange={(event) => setSelectedStudent(event.target.value)}>
                {students.map(student => 
                    <option value={student.id} key={student.id}>
                        {student.first_name} {student.last_name}
                    </option>
                )}
            </select>
        </div>
    )
}