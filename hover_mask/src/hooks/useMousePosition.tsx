import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e : MouseEvent) => {
    // console.log(e.clientX, e.clientY)
    setMousePosition({ x: e.x, y: e.y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => updateMousePosition(e));

    return () => window.removeEventListener("mousemove", (e) => updateMousePosition(e));
  }, []);

  return mousePosition;
};

export default useMousePosition;