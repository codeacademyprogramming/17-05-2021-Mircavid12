import switchImg from "../../../images/switch.png";
import currencyList from "../../../currency.json";
import React from "react";


function Content() {
    const fromSelect = React.createRef();
    const fromInput = React.createRef();
    const outputRef = React.createRef();
    function eventHandler(){
        let from = currencyList.find(element=>element.code==fromSelect.current.value);
        let to = currencyList.find(element=>element.code==outputRef.current.value);
        document.getElementById("exchangeValue").innerText = ((fromInput.current.value*from.value)/to.value).toFixed(4);
    }
  return (
    <div className="content">
      <div className="fromPart">
        <label>From</label>
        <input ref={fromInput} name="fromInput"/>
        <select ref={fromSelect} id="from">
          {currencyList.map(currency=><option key={currency.code}>{currency.code}</option>)}
        </select>
      </div>
      <img src={switchImg} className="switchImg" />
      <div className="toPart">
        <label>To</label>
        <span id="exchangeValue"></span>
        <select id="to" ref={outputRef}>
        {currencyList.map(x=><option>{x.code}</option>)}
        </select>
      </div>
      <button type="submit" className="btn btn-primary submitBtn" onClick={eventHandler}>
        Exchange
      </button>
    </div>
  );
}

export default Content;