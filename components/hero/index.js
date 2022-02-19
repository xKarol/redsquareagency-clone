import { useEffect, useState } from "react";
import { StyledHero, StyledHeading } from "./styles";
import AnimatedText from "./animated-text";

function Hero() {
  const [splittedHeading, setSplittedHeading] = useState([]);
  const headingText = "The agency for what comes next.";
  const half = Math.ceil(splittedHeading.length / 2);

  useEffect(() => {
    setSplittedHeading(headingText.split(" "));
  }, []);

  return (
    <StyledHero className="spacing">
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
    </StyledHero>
  );
}

export default Hero;
