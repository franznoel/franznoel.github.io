import React, { Component } from 'react';

import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';


export default class MainToolbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">PangPawn</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}