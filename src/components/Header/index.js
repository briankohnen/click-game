import React from "react";
import "./style.css";
import ScoreTicker from '../ScoreTicker';

function Header(props) {

  let headerMessage = 'options';
    if (props.message === "Wrong!") {
      headerMessage = 'incorrect';
    } else if (props.message === "Correct!") {
      headerMessage = 'correct';
    } else {
      headerMessage = 'options';
    }
  
  return (
    <div className='topHeader'>
      <h1 className="title"><a href='/'>Clicky Game!</a></h1>
      <h2>
        {props.message.split('\n').map((item, key) => {
          return <span className={headerMessage} key={key}>{item}<br/></span>
          })}
      </h2>
      <ScoreTicker score={props.score} topScore={props.topScore} />
    </div>
  );
}

export default Header;
