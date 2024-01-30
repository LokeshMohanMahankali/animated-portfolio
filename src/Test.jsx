import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      <motion.div
        class="box"
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
        // whileHover={{ opacity: 1, scale: 2 }}
        whileTap={{}}
        drag
      ></motion.div>
    </div>
  );
};

export default Test;
