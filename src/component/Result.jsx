import React from 'react'

function Result(props) {
  return (

//Getting data in form of props and then using them here

<div id='finalResult'>
      <h1>Final Result</h1>
{/* displaying our result here with the help of props object */}

    <div id='resultDetails'>{props.ourResult} out of 5 Correct - ({props.ourResult*20}%)</div>
{/* this reset button will invoke the callback function which will then reset our state */}

    <button onClick={props.backButton}>Restart</button>
</div>
  )
}

export default Result