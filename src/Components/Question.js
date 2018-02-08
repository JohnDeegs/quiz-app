import React from 'react';

/*
We don't use the class syntax here because this component is concerned with how things LOOK and not how it WORKS
*/

function Question(props){
    return (
        <h2 className="question">{props.content}</h2>
    );
}

export default Question;