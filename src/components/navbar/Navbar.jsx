import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <div class="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lamadev
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="instagram.png" alt="instagram" />
          </a>
          <a href="#">
            <img src="youtube.png" alt="youtube" />
          </a>
          <a href="#">
            <img src="dribble.png" alt="dribble" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
