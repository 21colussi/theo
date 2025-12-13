import { useState } from 'react'
import './App.css'

function Temp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <img alt='' src='crane.png'></img>
        <span>Site en construction ...</span>
      </div>
    </>
  )
}

export default Temp