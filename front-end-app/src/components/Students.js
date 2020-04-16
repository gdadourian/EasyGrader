import React, { useState, useEffect } from "react";

const MOCK_STUDENTS=[
    {id: 1, first_name: 'John', last_name: 'Smith'}, 
    {id:2, first_name: 'Mary', last_name: 'Peters'}
]
export const Students = () => {
    const [students, setStudents]=useState([])
    
    useEffect(()=>{
        async function fetchStudents() {
            const res = await fetch('https://my.api.mockaroo.com/students?key=f1d20b10');
            res.json().then(res => setStudents(res))
        }
        if (students.length === 0) {
            // fetchStudents()
            setStudents(MOCK_STUDENTS)
        }
            
    })
  
    if (!students.length) {
        return (<div>Students loading...</div>)
    }
    return (
        <div>
            <select>
                {students.map(student => 
                    <option id={student.id}>{student.first_name} {student.last_name}</option>
                )}
            </select>
        </div>
    )
}