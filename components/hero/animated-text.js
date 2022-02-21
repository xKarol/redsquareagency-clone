import { motion } from "framer-motion";

function AnimatedText({ index, text }) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 2 + 0.3 * index,
          },
        },
        hidden: { opacity: 0 },
      }}
    >
      {text}
    </motion.span>
  );
}

export default AnimatedText;
