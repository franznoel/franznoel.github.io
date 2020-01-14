import React, { Component } from 'react';
import { Typography } from '@material-ui/core';


export default function ProfileSoftwareExperiences(props) {
    return (
        <div>
            <Typography variant="h6">Software Experiences</Typography>
            <ul>
                <li><b>Languages:</b> Python, Java, PHP, HTML,  JavaScript, MySQL, jQuery</li>
                <li><b>E-Commerce Software:</b> Magento, XCart, MiRetail, and ATG eCommerce</li>
                <li><b>CMS:</b> Wordpress, or custom made using PHP/Python</li>
                <li><b>Protocols:</b> DNS ADDRESS, IP ADDRESS, HTTP, FTP, TCP, UDP, WS, etc.</li>
                <li><b>Package Managers:</b> NPM, Linux Package Managers, PIP (Python)</li>
                <li><b>Databases:</b> MySQL, PgSQL, Google Datastore, MongoDB, Google BigQuery</li>
                <li><b>Servers:</b> Google Cloud, AWS, NodeJs, Apache, AWS S3, AWS SNS, and Firebase</li>
                <li><b>Repositories:</b> SVN, Mercurial, Git, Jira (repository controller)</li>
                <li><b>Pipeline:</b>Pipeline: Jenkins, Artifactory</li>
                <li><b>Operating Systems:</b> Linux/Ubuntu (Bash), Windows, and Mac</li>
                <li><b>Graphic Design:</b>  Gimp and Adobe Photoshop</li>
                <li><b>IDE:</b> Eclipse, Sublime Text 3, and Notepad++, XCode</li>
                <li><b>Design Patterns Advocate:</b> Practices Model View Controller (MVC), Model View Presenter (MVP), OOP, etc.</li>
                <li><b>Project Management Tools:</b> Jira Agile</li>
                <li><b>Web/Application Tools:</b> Bootstrap, Semantic UI, Zurb Foundation, Webix, Angular, ReactJS</li>
            </ul>
        </div>
    );
}