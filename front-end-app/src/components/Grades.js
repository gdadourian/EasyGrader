import React, { useState, useEffect } from "react";
import './Grades.css';

export const Grades = ({ selectedStudent }) => {
    const [grades, setGrades]=useState([])
    
    useEffect(()=>{
        async function fetchGrades() {
            const res = await fetch('https://my.api.mockaroo.com/grades?key=f1d20b10');
            res.json().then(res => setGrades(res))
        }
        if (grades.length === 0) {
            fetchGrades()
        }
        console.log('fetch grades effect')
    }, [grades])
  
    if (!grades.length) {
        return (<div>Grades loading...</div>)
    }
    
    const selectedGrades = grades.filter(grade => grade.student_id == selectedStudent)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Assignment</th>
                        <th>Score</th>
                        <th>out of</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedGrades.map(grade =>
                        <tr key={grade.id}>
                            <td>{grade.assignment}</td>
                            <td className='grade'>{grade.score_received}</td>
                            <td className='grade'>{grade.score_possible}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}