import { motion } from "framer-motion";
import "./App.css";

function ImgCol({ imgs = [] ,y }) {
    console.log(y)
  return (
    <motion.div className="img-col" style={{y}}>
      {imgs.map((img, index) => (
        <img src={img} key={`img_${index}`} alt={`random_webiste_${index}`} />
      ))}
    </motion.div>
  );
}

export default ImgCol;
