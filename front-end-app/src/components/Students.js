import React, { useState, useEffect } from "react";
import './Students.css';

export const Students = ({ setSelectedStudent }) => {
    const [loading, setLoading]=useState(true)
    const [students, setStudents]=useState([])
    
    useEffect(()=>{
        async function fetchStudents() {
            const res = await fetch('/api/students');
            res.json().then(res => {
                setStudents(res)
                setLoading(false)
            })
        }
        
        fetchStudents()
        
        console.log('fetch students effect')
    }, [])

    if (loading) {
        return (<div>Students loading...</div>)
    }
  
    if (!students.length) {
        return (<div style={{'padding': '1em'}}>No students.</div>)
    }
    return (
        <div>
            <label htmlFor='students'>Select Student:</label>
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