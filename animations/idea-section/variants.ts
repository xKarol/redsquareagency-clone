import type { Variants } from "framer-motion";

export const variants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    translateY: 0,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, translateY: 100 },
};
