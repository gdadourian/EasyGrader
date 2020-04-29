import React from 'react';

export const GradeForm = ({ selectedStudent }) => {
    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            student: selectedStudent, // student._id
            assignment: event.target.assignment.value,
            score_received: event.target.score_received.value,
            score_possible: event.target.score_possible.value,
        }
        fetch('/api/grades', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>Student: {selectedStudent}</div>
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

            <button>Create grade</button>
        </form>
    )
}