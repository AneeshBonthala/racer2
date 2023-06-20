import { useCallback } from "react";
import Background from "./Background.js";
import { loadFull } from "tsparticles";
import './styles.css';
import { motion } from "framer-motion"

const HomePage = () => {
  const handleClick = () => {
    console.log('mouse click');
  }
    return (
      <body onClick={handleClick}>
        <Background></Background>
        <header className="start_tracking">
          <motion.div
            whileHover={{ scale: 1.2, opacity: 0.5 }}
          >Start tracking today
          </motion.div>
        </header>
        <p className="click_here">
          <motion.div
            whileHover={{ scale: 1.1, opacity: 0.5 }}
          >Click here to continue</motion.div>
        </p>
      </body>
    );
};

export default HomePage;