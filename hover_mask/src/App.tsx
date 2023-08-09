import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className='mask'>
          <p >
            A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
          </p>
        </div>
        <p>
          <p className='base'>I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
        </p>
      </div>
    </>
  )
}

export default App
