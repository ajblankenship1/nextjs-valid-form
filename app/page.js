'use client'
import {useState} from 'react';

export default function Home() {
  const [initialNumber,setInitialNumber] = useState("");
  const [exponentNumber,setExponentNumber] =useState("");
  const [answerBox, setAnswerBox] = useState("Answer Will Appear Here");
  const [initialNumberPlaceholder, setInitialNumberPlaceholder] = useState("this number");
  const [exponentPlaceholder, setExponentPlaceholder] = useState("to the power of this number");
  const [initialNumberClass, setInitialNumberClass] = useState("initialNumberOK");
  const [exponentNumberClass,setExponentNumberClass] = useState("exponentNumberOK");
  const [initialNumberLabel,setInitialNumberLabel] = useState("");
  const [exponentNumberLabel, setExponentNumberLabel] = useState("");
  const [initialNumberLabelClass, setInitialNumberLabelClass] = useState("");
  const [exponentNumberLabelClass, setExponentNumberLabelClass] = useState("");

  function handleInputNumber(event){
    setInitialNumber(event.target.value);
  
  }

  function handleInputExponent(event){
    setExponentNumber(event.target.value)
  }

  function handleClickAnswer(){
    let testInitial = Number(initialNumber);
    let testExponent = Number(exponentNumber);
    if(isNaN(testInitial) && isNaN(testExponent)){
      setInitialNumberClass("initialNumberWrong");
      setInitialNumberLabel("this must me a NUMBER");
      setInitialNumberLabelClass("initialNumberWrongLabel");
      setExponentNumberClass("exponentNumberWrong");
      setExponentNumberLabel("this must me a NUMBER");
      setExponentNumberLabelClass("exponentNumbeWrongrLabel");
      setAnswerBox("???");
      setInitialNumber("Click CLEAR and try again");
      setExponentNumber("Click CLEAR and try again");
    
    }
    else if(isNaN(testInitial)){
    setInitialNumberClass("initialNumberWrong");
    setInitialNumberLabel("this must me a NUMBER");
    setInitialNumberLabelClass("initialNumberWrongLabel");
    setAnswerBox("???");
    setInitialNumber("Click CLEAR and try again");
    }else if(isNaN(testExponent)){
    setExponentNumberClass("exponentNumberWrong");
    setExponentNumberLabel("this must me a NUMBER");
    setExponentNumberLabelClass("exponentNumbeWrongrLabel");
    setExponentNumber("Click CLEAR and try again");
    setAnswerBox("???");
    }else{
    setAnswerBox(initialNumber**exponentNumber);
    }
   
  }

  function handleClickClearAll(){
    setAnswerBox("Answer Will Appear Here");
    setInitialNumber("");
    setExponentNumber("");
    setInitialNumberClass("initialNumberOK");
    setExponentNumberClass("exponentNumberOK");
    setExponentNumberLabel("");
    setInitialNumberLabel("");
  }

  return (
    <main>
      <div className="calcBox">
        <h1>Exponent Calculator</h1>
        <form className='calculator'>
          <div className='initialNumberDiv'>
            <label className={initialNumberLabelClass}>{initialNumberLabel}</label>
            <input type="text" placeholder={initialNumberPlaceholder} className={initialNumberClass} value={initialNumber} onChange={handleInputNumber}/>
          </div>
          <p className="toThePowerOf"> ^ </p>
          <div className='exponentNumberDiv'>
            <label className={exponentNumberLabelClass}>{exponentNumberLabel}</label>
            <input type="text" placeholder={exponentPlaceholder} className={exponentNumberClass} value={exponentNumber} onChange={handleInputExponent}/>
          </div>
        </form>
        <button className="answerButton" onClick={handleClickAnswer}> = </button>
        <div className="answerBox"> {answerBox} </div>
        <button className="clearButton" onClick={handleClickClearAll}>CLEAR</button>
      </div>
    </main>
  );
}
