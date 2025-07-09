// IMPORT AREA

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//FUNCTION DEFINATION AREA

function App() {
  const [count, setCount] = useState(0)


  // EVERY FUNCTION RETURN SOMETHING 

  // WHAT REACT FUNCTION/COMPONENT ONLY RETURN HTML STRUCTURE

  return (
    <>
      <div>
        <a
          href="https://www.youtube.com/@oklabsguru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://yt3.ggpht.com/3xypAR21HYEfj_dW3YQQI3PFYFYvb-qv9OVkbMHb8YkiaI6bjSts-U7F9QTY159UGvyZGdB_4N4=s48-c-k-c0x00ffffff-no-rj"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>

      <h1>Welcome to OKLABS !</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
      <p className="read-the-docs">
        Click on the OKLABS logo to learn more
      </p>
    </>
  )
}

// EXPORT AREA

export default App
