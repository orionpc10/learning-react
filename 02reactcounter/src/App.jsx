import { useState } from 'react'

function App() {
  //below, in the array: [variable, method]
  const [counter, setCounter] = useState(0); // here 0 is the initial starting value of counter

  const addValue = ()=>{
    setCounter(counter+1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    // above callback () => {} helps to get rid of batch problem
  }
  const remValue = ()=>{
    setCounter(counter-1)
  }
  return(
    <>
      <h1>hello</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>add</button> {" "}
      <button onClick={remValue}>remove</button>
      <p>footer: </p>
    </>
  )
}

export default App
