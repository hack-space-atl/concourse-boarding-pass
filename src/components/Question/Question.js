import React, {Component} from 'react';
import './Question.css'
import {withRouter} from "react-router";
import { Button } from "semantic-ui-react";

class QuestionComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="questionDiv">

                <div className="question">Have you installed Concourse yet?</div>

                <div className="buttonContainer">
                    <Button primary className="button" onClick={() => {
                        this.props.history.push('/configure');
                    }}>Yes!</Button>
                    <Button secondary className="button" onClick={() => {
                        this.props.history.push('/install');
                    }}>Not yet...</Button>
                </div>


            </div>
        )
    }

}

export default withRouter(QuestionComponent)