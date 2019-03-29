import React from 'react';
import Table from './table';

export default () => {
    const students = [
        {
            student: 'Chris', 
            course: 'Crime Fighting', 
            grade: '82'},
        {
            student: 'jason', 
            course: 'blowing bubbles', 
            grade: '99'
        },
        {
            student: 'Jaime', 
            course: 'origami making', 
            grade: '50'}
    ];

    return (
    <div className="container">
        <div className="container">
        <h1>Student Grade Table</h1>
        <Table data={students}/>
        </div>    
    </div>
    )
}

