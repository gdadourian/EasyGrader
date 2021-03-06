import React, { useState, useEffect } from "react";
import './Students.css';

export const Students = ({ setSelectedStudent, selectedStudent }) => {
    const [loading, setLoading]=useState(true)
    const [students, setStudents]=useState([])

    const handleSelectStudent = event => {
        const selectedStudent = students.find(student => student._id == event.target.value)
        setSelectedStudent(selectedStudent)
    }
    
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
            <label htmlFor='students'>Student:</label>
            <select id='students' onChange={handleSelectStudent} value={selectedStudent._id}>
                <option value=''>Select Student</option>
                {students.map(student => 
                    <option value={student._id} key={student._id}>
                        {student.first_name} {student.last_name}
                    </option>
                )}
            </select>
        </div>
    )
}
