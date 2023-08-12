import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion"

import "./App.css";
import ImgCol from "./ImgCol";

function App() {

  const ref_container = useRef()

  const {scrollYProgress} = useScroll({
    target:ref_container,
    offset:["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0,1],[0, 200 * 2])
  const y2 = useTransform(scrollYProgress, [0,1],[0, 200 * 2.5])
  const y3 = useTransform(scrollYProgress, [0,1],[0, 200 * 3.7])
  const y4 = useTransform(scrollYProgress, [0,1],[0, 200 * 0.3])

  return (
    <div>
      <div className="spacer"> Scroll down</div>
      <div className="img-container" ref={ref_container}>
        <ImgCol imgs={["1.jpg", "2.jpg", "3.jpg"]} y={y1}/>
        <ImgCol imgs={["4.jpg", "5.jpg", "6.jpg"]} y={y2}/>
        <ImgCol imgs={["7.jpg", "8.jpg", "9.jpg"]} y={y3}/>
        <ImgCol imgs={["10.jpg", "11.jpg", "12.jpg"]} y={y4}/>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
