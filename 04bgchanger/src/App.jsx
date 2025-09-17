import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  const [clickedText, setClickedText] = useState('OLIVE')
  function changeColor(color){
    setColor(color)
    setClickedText(`clicked ${color}`)
  }

  return (
    <div className='w-full h-screen duration-200 flex flex-col justify-center' style={{backgroundColor: color}}>
      {
        clickedText && (
          <p className="mb-8 text-xl font-semibold text-white drop-shadow-md">
            {clickedText}
          </p>
        )
      }
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>changeColor('red')} className='outline-none px-4 py-1 rounded-full text-red-500 shadow-lg'>test</button>{" "}
          <button onClick={()=>changeColor('blue')} className='outline-none px-4 py-1 rounded-full text-blue-500 shadow-lg'>test2</button>{" "}
          <button onClick={()=>changeColor('green')} className='outline-none px-4 py-1 rounded-full text-green-500 shadow-lg'>test3</button>{" "}
        </div>
      </div>
    </div>
  )
}

export default App
