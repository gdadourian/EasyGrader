import React from 'react'
import './Average.css';

export const Average = ({ grades }) => {
    let gradeReceivedSum = 0;
    let gradePossibleSum = 0;
    grades.forEach(grade => {
        gradeReceivedSum += grade.score_received
        gradePossibleSum += grade.score_possible
    })
    const gradeAverage = Math.round(gradeReceivedSum / gradePossibleSum * 100)

    return (
        <p className='average'>
            <span>Average:</span>
            {gradeAverage}%
        </p>
    )
}