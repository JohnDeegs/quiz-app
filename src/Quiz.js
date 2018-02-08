import React from 'react';
import Question from './Components/Question';
import QuestionCount from './Components/QuestionCount';
import Answers from './Components/Answers';

function Quiz(props) {

    function renderAnswerOptions(key) {
        return (
          <Answers
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }

    return (
        <div className="quiz">
            <div className="well">
                
                <QuestionCount 
                    counter={props.questionId}
                    total={props.questionTotal}
                />

                <Question content={props.question}/>

                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
        </div>
    )
}

export default Quiz;