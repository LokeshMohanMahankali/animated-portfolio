import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      // x: 800,
      // transition: { duration: 2, stiffness: 100, damping: 100 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["items1", "items2", "items3", "items4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {" "}
            {item}{" "}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
