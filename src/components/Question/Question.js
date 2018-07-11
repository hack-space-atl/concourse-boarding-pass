import React, {Component} from 'react';
import './Question.css'
import {withRouter} from "react-router";
import { Button, Typography } from '@material-ui/core';

class QuestionComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="questionDiv">
                <Typography variant='title' align='center'>Have you installed Concourse yet?</Typography>
                <div className="buttonContainer">
                    <Button variant='contained' color='primary' className="buttons" onClick={() => {
                        this.props.history.push('/configure');
                    }}>Yup!</Button>
                    <Button variant='contained' color='secondary' className="buttons" onClick={() => {
                        this.props.history.push('/install');
                    }}>Not yet...</Button>
                </div>
            </div>
        )
    }

}

export default withRouter(QuestionComponent)