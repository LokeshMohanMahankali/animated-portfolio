import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import Links from "./links/links";
import Togglebutton from "./togglebutton/togglebutton";

const sidebar = () => {
  const [open, setopen] = useState(false);

  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      Transition: {
        type: "spring",
        stiffness: 20,
        delay: 80,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      Transition: {
        delay: 1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links />
      </motion.div>
      <Togglebutton setopen={setopen} />
    </motion.div>
  );
};

export default sidebar;
