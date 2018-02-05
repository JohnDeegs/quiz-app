import React, { Component } from 'react';
import Quiz from './Quiz';

class App extends Component {
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
