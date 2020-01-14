import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// import FranzHeadshot from '../static/images/franz-noel-tanglao.jpg';
import { Grid, Container, Card, CardHeader, Typography, CardContent, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ProfileSoftwareExperiences from '../components/ProfileSoftwareExperiences';
import ProfileEducation from '../components/ProfileEducation';
import ProfileAbout from '../components/ProfileAbout';

export default function Portfolio(props) {
    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        container: {
            padding: '8px',
        },
        title: {
            fontSize: "30px"
        },
    }));

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <h2 className={classes.title}>Profile</h2>
            <Grid container spacing={1}>
                <Grid item sm={12} >
                    <ProfileAbout></ProfileAbout>
                </Grid>
                <Grid item sm={12} spacing={10}>
                    <Card spacing={2}>
                        <CardContent>
                            <Grid container>
                                <Grid item sm={8}>
                                    <ProfileSoftwareExperiences></ProfileSoftwareExperiences>
                                </Grid>
                                <Grid item sm={4}>
                                    <ProfileEducation></ProfileEducation>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
