import switchImg from "../../../images/switch.png";
import Currency from "../../../currency.json";
import React from "react";


function Content() {
    const fromSelect = React.createRef();
    const fromInput = React.createRef();
    const outputRef = React.createRef();
    function eventHandler(){
        let from = Currency.filter(element=>element.code==fromSelect.current.value);
        let to = Currency.filter(element=>element.code==outputRef.current.value);
        console.log(from[0].value);
        document.getElementById("exchangeValue").innerText = ((fromInput.current.value*from[0].value)/to[0].value).toFixed(3);
    }
  return (
    <div className="content">
      <div className="fromPart">
        <label>From</label>
        <input ref={fromInput} name="fromInput"/>
        <select ref={fromSelect} id="from">
          {Currency.map(x=><option>{x.code}</option>)}
        </select>
      </div>
      <img src={switchImg} className="switchImg" />
      <div className="toPart">
        <label>To</label>
        <span id="exchangeValue"></span>
        <select id="to" ref={outputRef}>
        {Currency.map(x=><option>{x.code}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-primary submitBtn" onClick={eventHandler}>
        Exchange
      </button>
    </div>
  );
}

export default Content;