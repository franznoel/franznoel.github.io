import React, { Component } from 'react';
import { Typography } from '@material-ui/core';


export default function ProfileEducation(props) {
    return (
        <div>
            <Typography variant="h6">Education</Typography>
            <Typography variant="h6">University of Phoenix 2015</Typography>
            <Typography variant="body2" paragraph>Degree: Masters in Information Systems (Graduated)</Typography>
            <Typography variant="h6">University of St. La Salle 2003</Typography>
            <Typography variant="body2" paragraph>Degree: Bachelor of Science in Computer Science (Graduated)</Typography>
        </div>            
    );
}