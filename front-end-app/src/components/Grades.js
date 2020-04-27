import React, { useState, useEffect } from "react";
import { Average } from './Average'
import './Grades.css';

export const Grades = ({ selectedStudent }) => {
    const [loading, setLoading]=useState(true)
    const [grades, setGrades]=useState([])
    
    useEffect(()=>{
        async function fetchGrades() {
            const res = await fetch('/api/grades');
            res.json().then(res => {
                setGrades(res)
                setLoading(false)
            })
        }
        fetchGrades()
        console.log('fetch grades effect')
    }, [])
  
    if (loading) {
        return (<div>Grades loading...</div>)
    }
    
    const selectedGrades = grades.filter(grade => grade.student_id == selectedStudent)
    
    if (!selectedGrades.length) {
        return (<div style={{'padding': '1em'}}>No grades.</div>)
    }

    return (
        <div>
            <Average grades={selectedGrades} />
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