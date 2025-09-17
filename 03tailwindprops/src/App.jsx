import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-1xl bg-amber-600 p-3 rounded-md'>vite with tailwind</h1>
      <Card 
          text="some bs" username="hc" post="developer" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwHYBtNhacL63FmNsPOvP9OQAPp1j0hlQ4g&s"
      />
      <Card 
          username="ab" post="something" 
      />
      <Card 

      />
    </>
    
  )
}

export default App
