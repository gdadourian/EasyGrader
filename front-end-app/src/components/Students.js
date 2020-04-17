import React, { useState, useEffect } from "react";

export const Students = () => {
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
            <select>
                {students.map(student => 
                    <option id={student.id} key={student.id}>{student.first_name} {student.last_name}</option>
                )}
            </select>
        </div>
    )
}