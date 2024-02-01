import React, { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import Links from "./links/links";
import Togglebutton from "./togglebutton/togglebutton";

const sidebar = () => {
  const [open, setopen] = useState(false);

  const varient = {
    open:
   closed:
  }

  return  <motion.div className="sidebar">
      <motion.div className="bg">
        <Links />
      </motion.div>
      <Togglebutton setopen={setopen} />
    </motion.div>

};

export default sidebar;