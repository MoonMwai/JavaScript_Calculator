// import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);


  const display = (symbol) => {
    setExpression(prev => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if(/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };
  const clear = () => {
    setExpression(prev => prev.split("").slice(0, prev.length-1).join(""));
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div onClick={display} id="display" className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div onClick={allClear} id="allclear"className="padButton tomato">AC</div>
        <div onClick={clear} id="clear" className="padButton tomato">C</div>
        <div onClick={() => display("/")} id="divide" className="padButton">/</div>
        <div onClick={() => display("*")} id="multiply" className="padButton">X</div>
        <div onClick={() => display("7")} id="seven" className="padButton dark-gray">7</div>
        <div onClick={() => display("8")} id="eight" className="padButton dark-gray">8</div>
        <div onClick={() => display("9")} id="nine" className="padButton dark-gray">9</div>
        <div onClick={() => display("-")} id="subtract" className="padButton">-</div>
        <div onClick={() => display("4")} id="four" className="padButton dark-gray">4</div>
        <div onClick={() => display("5")} id="five" className="padButton dark-gray">5</div>
        <div onClick={() => display("6")} id="six" className="padButton dark-gray">6</div>
        <div onClick={() => display("+")} id="add" className="padButton">+</div>
        <div onClick={() => display("1")} id="one" className="padButton dark-gray">1</div>
        <div onClick={() => display("2")} id="two" className="padButton dark-gray">2</div>
        <div onClick={() => display("3")} id="three" className="padButton dark-gray">3</div>
        <div onClick={calculate} id="equals" className="padButton equals blue">=</div>
        <div onClick={() => display("0")} id="zero" className="padButton zero dark-gray">0</div>
        <div onClick={() => display(".")} id="decimal" className="padButton dark-gray">.</div>        
      </div>
    </div>
  );
    
};

ReactDOM.render(<Calculator />, document.getElementById('root'));
