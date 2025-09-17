import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children : 'Click me to visit google'
}

function MyApp(){
  return(
    <div>
      <h1>custom react app</h1>
    </div>
  )
}

const AnotherElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const ActualReactElement = React.createElement(
    'a',
    {href: "https://google.com", target: "_blank"},
    'click to visit google'
    // remember the order : 1) type, 2) prop, 3) children
)

createRoot(document.getElementById('root')).render(
    ActualReactElement
)
