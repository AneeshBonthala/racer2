import { useCallback, useEffect, useState } from "react";
import Background from "./Background.js";
import { loadFull } from "tsparticles";
import './styles.css';
import { motion } from "framer-motion";
import Join from "./Join.js"


const PopUp = () => {
  return
}


const HomePage = () => {
  const [join, setJoin] = useState(false);
    return (
      <div className="welcome_container" onClick={() => setJoin(!join)}>
        <Background></Background>
        {join && <Join show={true}></Join>}
        <p className="start_tracking">
          <motion.div
            whileHover={{ scale: 1.2, opacity: 0.5 }}
          >Start tracking today
          </motion.div>
        </p>
        <p className="click_here">
          <motion.div
            whileHover={{ scale: 1.1, opacity: 0.5 }}
          >Click anywhere to continue</motion.div>
        </p>
      </div>
    );
};

export default HomePage;