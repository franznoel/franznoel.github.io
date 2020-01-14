import React from 'react';
import { Card, CardHeader, Typography, CardContent } from '@material-ui/core';



export default function ProfileAbout(props) {
    return (
        <Card spacing={2}>
            <CardContent>
                <Typography variant="h6">About</Typography>
                <Typography variant="body2">I am a web developer who offers several years of full stack development experience. I can use project management tools to both manage a team and deliver my own projects. I started as a backend programmer, worked as a front end developer, and managed multiple overseas and in-house employees for different companies. I can use different programming languages with proper use of OOP, data structures, and other design patterns. With regards to server and systems management, I am able to use cloud platforms, program Bash, or create proprietary applications connected to private platforms. I can use different databases ranging from SQL to NoSQL. Combining the knowledge I possess, I can create my own framework or use other frameworks. In project management, I am well-versed using Jira Agile, and the use of JQL. I can use network protocols and secure a system architectural design, comfortably use command lines, scale servers and networks, and have a strong passion to document all I’ve learned in my experience and explain things thoroughly.</Typography>
            </CardContent>
        </Card>
    );
}