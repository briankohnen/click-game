import React from "react";
import "./style.css";
import ScoreTicker from '../ScoreTicker';

function Header(props) {
  return (
    <div className='topHeader'>
      <h1 className="title">Clicky Game!</h1>
      <h2 className='options'>{props.children}</h2>
      <ScoreTicker score={props.score} topScore={props.topScore} />
    </div>
  );
}

export default Header;
