import React, { useState } from 'react';

export const GradeForm = ({ selectedStudent }) => {
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            student: selectedStudent, // student._id
            assignment: event.target.assignment.value,
            score_received: event.target.score_received.value,
            score_possible: event.target.score_possible.value,
        }
        const res = await fetch('/api/grades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        res.json().then(res => {
            if (res.errors) {
                setErrors(res.errors.map(err => err.msg))
                setStatus('Grade was not created.')
            } else {
                setErrors([])
                setStatus('Grade created successfully.')
            }
        })
    }

    const statusMsgColor = status.includes('success') ? 'green' : 'red'
    const statusStyles = { color: statusMsgColor, fontWeight: 'bold' }

    return (
        <form onSubmit={handleSubmit}>
            <p><b>Student:</b> {selectedStudent.first_name} {selectedStudent.last_name}</p>
            <div>
                <label>Assignment:</label>
                <input type='text' name='assignment' required />
            </div>

            <div>
                <label>Score:</label>
                <input type='number' name='score_received' required />
            </div>

            <div>
                <label>Out of:</label>
                <input type='number' name='score_possible' required />
            </div>

            <p style={statusStyles}>{status}</p>

            {errors.map(err =>
                <p style={{color:'red'}} key={err}>{err}</p>
            )}

            <button>Create grade</button>
        </form>
    )
}