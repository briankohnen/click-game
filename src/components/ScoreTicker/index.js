import React from 'react';
import './style.css';

function ScoreTicker(props) {
    return (
        <div className='score'>
            <h1>Your Score : <span>{props.score}</span> | Top Score : <span>{props.topScore}</span></h1>
        </div>
    );
}

export default ScoreTicker;