import React from "react";

import { SlideUpAnimation } from "../../animations/hero";
import { HeroHeadingWord } from "../../components/hero";
import { StyledHeading } from "../../components/hero/styles";
import useSplitText from "../../hooks/use-split-text";

const HeroHeadingContainer = () => {
  const headingText = "The agency for what comes next.";
  const { textChunks } = useSplitText({ text: headingText });

  return (
    <SlideUpAnimation>
      <StyledHeading>
        {textChunks.map((chunk, chunkIndex) => {
          return (
            <>
              {chunk.map((word, wordIndex) => {
                const lastChunkId = chunkIndex - 1;
                const lastChunkLastWordId =
                  lastChunkId < 0 ? 0 : textChunks[lastChunkId].length - 1;
                return (
                  <HeroHeadingWord key={word} index={chunkIndex + lastChunkLastWordId + wordIndex}>
                    {word}
                  </HeroHeadingWord>
                );
              })}
              <br />
            </>
          );
        })}
      </StyledHeading>
    </SlideUpAnimation>
  );
};

export default HeroHeadingContainer;