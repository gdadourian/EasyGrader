import React from 'react'
import './Average.css';

export const Average = ({ grades }) => {
    let gradeSum = 0;
    grades.forEach(grade => gradeSum += grade.score_received)
    const gradeAverage = gradeSum / grades.length
    
    return (
        <p className='average'>
            <span>Average:</span>
            {gradeAverage}%
        </p>
    )
}