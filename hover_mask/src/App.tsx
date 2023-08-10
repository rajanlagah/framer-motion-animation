import { useState } from 'react'
import { motion } from 'framer-motion';

import useMousePosition from './hooks/useMousePosition';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const {x,y} = useMousePosition()
  const MASK_SIZE = isHovered ? 400: 40
  return (
    <>
      <div className="main">
        <motion.div 
          animate={{
            WebkitMaskPosition: `${x - (MASK_SIZE/2)}px ${y - (MASK_SIZE/2)}px`,
            WebkitMaskSize: `${MASK_SIZE}px`
          }}
          transition={{ type: "tween", ease: "backOut", duration:0.5}}
          className='mask'>
          <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
          </p>
        </motion.div>
        <div className='base'>
          <p >I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
        </div>
      </div>
    </>
  )
}

export default App
