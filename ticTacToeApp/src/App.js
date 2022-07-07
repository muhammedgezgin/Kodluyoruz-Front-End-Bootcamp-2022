import { useEffect, useState } from 'react';
import './App.css';
import Click from './components/HandelClick';

const App = () => {
  const [status1, setStatus1] = useState("")
  const [status2, setStatus2] = useState("")
  const [status3, setStatus3] = useState("")
  const [status4, setStatus4] = useState("")
  const [status5, setStatus5] = useState("")
  const [status6, setStatus6] = useState("")
  const [status7, setStatus7] = useState("")
  const [status8, setStatus8] = useState("")
  const [status9, setStatus9] = useState("")

  
  
  return (
  <>
    <h1>GAME TIME</h1>
    <button onClick={() => setStatus1("X") }  id="one"><p>{status1}</p></button>
    <button onClick={() => setStatus2("X") } id="two"><p>{status2}</p></button>
    <button onClick={() => setStatus3("X") } id="three"><p>{status3}</p></button>
    <button onClick={() => setStatus4("X") } id="four"><p>{status4}</p></button>
    <button onClick={() => setStatus5("X") } id="five"><p>{status5}</p></button>
    <button onClick={() => setStatus6("X") } id="six"><p>{status6}</p></button>
    <button onClick={() => setStatus7("X") } id="seven"><p>{status7}</p></button>
    <button onClick={() => setStatus8("X") } id="eight"><p>{status8}</p></button>
    <button onClick={() => setStatus9("X") } id="nine"><p>{status9}</p></button>
  </>
)
}

export default App;