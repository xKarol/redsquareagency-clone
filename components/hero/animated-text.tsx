import { motion } from "framer-motion";

type Props = {
  index: number;
  text: string;
};

function AnimatedText({ index, text }: Props) {
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
      }}>
      {text}{" "}
    </motion.span>
  );
}

export default AnimatedText;
