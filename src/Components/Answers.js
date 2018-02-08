import React from 'react';

function Answers(props){
    return(
        <li className="answerOption">
            <input 
                type="radio"
                className="radioBtn"
                name="radioGroup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

export default Answers;