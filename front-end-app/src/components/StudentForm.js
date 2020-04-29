import React, { useState } from 'react';

export const StudentForm = () => {
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
        }
        const res = await fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        res.json().then(res => {
            if (res.errors) {
                setErrors(res.errors.map(err => err.msg))
                setStatus('Student was not created.')
            } else {
                setErrors([])
                setStatus('Student created successfully.')
            }
        })
    }

    const statusMsgColor = status.includes('success') ? 'green' : 'red'
    const statusStyles = { color: statusMsgColor, fontWeight: 'bold' }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First name:</label>
                <input type='text' name='first_name' required />
            </div>

            <div>
                <label>Last name:</label>
                <input type='text' name='last_name' required />
            </div>

            <p style={statusStyles}>{status}</p>

            {errors.map(err =>
                <p style={{color:'red'}} key={err}>{err}</p>
            )}

            <button>Create student</button>
        </form>
    )
}