
import { useState } from 'react'
import './app.css'
import QuestionBox from './component/QuestionBox'
import Questions from './question'
import logo from "./assets/logo.png"
import defaultimg from "./assets/default.png" 
import dark from "./assets/tonight.gif"
import night from "./assets/today.gif"



function App() {

// handling some states for functionality

const[start,setStart]=useState(true)
const[mode,setMode]=useState("Dark")
const[back,setBack]=useState(defaultimg)

// State to handle dark and light mode and change pictures on bases of that 

const handleMode=()=>{
  setMode(mode=>mode=="Dark"?mode="Light":mode="Dark")
  setBack((back)=>mode==="Dark"?back=dark
  :night)
}

//this function is used to render our quiz main page 

  function startQuiz(){
    setStart(start=>!start)
  }

//by default it will show start button and logo 

  if(start){
    return(
      <div>
        <div>
           <img src={logo} alt="" id='logo' />
        </div>
         <button onClick={startQuiz}>Start</button>
      </div>
    )
  } 

// importing our component when someone clicks our Start button and we will send our data as props 
// to our child component on named question

  else{
     return (
      <div id='grandPapaDiv'  style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width:'100vw'
      }}>
      <div id='papaDiv'>
        <button onClick={handleMode} id='switch'>{mode}</button>
      <div id='box'>
         <QuestionBox data={Questions}/>
      </div>
    </div>
    </div>
  )
}
}

export default App
