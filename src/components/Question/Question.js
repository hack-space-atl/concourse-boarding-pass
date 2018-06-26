import React, {Component} from 'react';
import './Question.css'
import {withRouter} from "react-router";

class QuestionComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="questionDiv">
                <p>Have you installed Concourse yet?</p>
                <div className="buttonContainer">
                    <button className="buttons" onClick={() => {
                        this.props.history.push('/configure');
                    }}>Yup!</button>
                    <button className="buttons" onClick={() => {
                        this.props.history.push('/install');
                    }}>Not yet...</button>
                </div>
            </div>
        )
    }

}

export default withRouter(QuestionComponent)