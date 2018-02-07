import React, { Component } from 'react';

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {
            startBtnStatus: 'visible',
            stage: 0,
            question: "",

        };
        this.startQuiz = this.startQuiz.bind(this);
        //this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    startQuiz(){
        this.setState({stage : 1});
    }

    componentWillMount(){
        fetch('https://opentdb.com/api.php?amount=10').then(results => {
            return results.json();
        }).then(data => {
            let questions = data.results;
        });
    }

    render(){

        if(this.state.stage === 1){
            alert("I am 1");
        }

        return(
            <div className="quiz">
                <div className="well">
                    <button onClick={this.startQuiz} className="btn btn-default">Start</button>
                    <div className="question">

                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;