import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedText from "./animated-text";
import { StyledHeading } from "./styles";

function Heading() {
  const [splittedHeading, setSplittedHeading] = useState<string[]>([]);
  const headingText = "The agency for what comes next.";
  const half = Math.ceil(splittedHeading.length / 2);

  useEffect(() => {
    setSplittedHeading(headingText.split(" "));
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          translateY: 0,
          transition: {
            duration: 0.6,
            delay: 4,
          },
        },
        hidden: { translateY: 100 },
      }}
    >
      <StyledHeading>
        {splittedHeading.slice(0, half).map((word, index) => (
          <AnimatedText key={word} text={word} index={index} />
        ))}
        <br />
        {splittedHeading
          .slice(half, splittedHeading.length)
          .map((word, index) => (
            <AnimatedText key={word} text={word} index={index + half} />
          ))}
      </StyledHeading>
    </motion.div>
  );
}

export default Heading;
