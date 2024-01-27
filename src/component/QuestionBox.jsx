import React, { useState } from 'react';
import Result from './Result';

function QuestionBox(props) {

//handling some propes for our functionality

  const [state, setState] = useState(0);
  const [resultScore, setResultScore] = useState(0);
  const [highlight,setHighlight] = useState("white")

// function for clicking our highlight button 

function handleHighlight(){
  setHighlight("red")
}
function removeHighlight(){
  setHighlight("white")
}

//function or increasing our score 

  function calculate(isCorrect) {
    if (isCorrect) {
      setResultScore((prevScore) => prevScore + 1);
    }
  }

// function for increasing question and also calling the calculate function which will increase score if it's true 

  function nextQuestion(isCorrect) {
    calculate(isCorrect);
    setState((prevState) => prevState + 1);
  }

//function which act as a callback function for reseting our question no. when restart is clicked

  function handleBackButton(){
    setState(0);
    setResultScore(0);
  }

//when our component reach till last question means when state goes above 4 then we will show result component

//in this we pass 2 props 1st is our score and other is callback function which will resest our state

  if (state > 4) {
    return <Result ourResult={resultScore} backButton={handleBackButton}/>;
  } else {
    return (
        <div className='mainDiv' id='QuizDiv'>
          <h1 className='blackcolor'>Question</h1>
          <p id='questionNo' className='blackcolor'>

{/* Geeting all the data in form of array from the props and for displying option we map throught each of them */}

           Question no. {state + 1} of {props.data.length}
          </p>
          <p className='blackcolor' id='ques' style={{color:highlight}}>{props.data[state].text}</p>
          <div className='optionsColumns'>

{/* form isCorrect we are getting that is our option is correct or not */}

            {props.data[state].options.map((e) => (
              <button onClick={() => nextQuestion(e.isCorrect)} key={e.id}>
                {e.text}
              </button>
            ))}
          </div>

{/* button for highlighting the question */}
          <div>
            <button onClick={handleHighlight} id='highlight'>Highlight</button>
            <button  onClick={removeHighlight} id='removeHighlight'>Remove Highlight</button>
          </div>
          
        </div>
    
      
    );
  }
}

export default QuestionBox;
