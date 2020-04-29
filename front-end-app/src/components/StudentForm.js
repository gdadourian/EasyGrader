import React from 'react';

export const StudentForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            first_name: event.target.first_name.value,
            last_name: event.target.last_name.value,
        }
        fetch('/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    }
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

            <button>Create student</button>
        </form>
    )
}