import React, { Component } from 'react';
import Quiz from './Quiz';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answers: [],
      answer: [],
      result: 0
    }
  }

  componentWillMount(){
    fetch('https://opentdb.com/api.php?amount=10').then(results => {
        return results.json();
    }).then(data => {
        let questions = data.results;
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Quiz</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Quiz />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
