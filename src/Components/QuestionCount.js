import React from 'react';

function QuestionStage(props){
    return (
        <div className="questionStage">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
}

export default QuestionStage;