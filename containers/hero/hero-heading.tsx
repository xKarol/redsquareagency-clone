import React from "react";

import { SlideUpAnimation } from "../../animations/hero";
import { HeroHeadingWord } from "../../components/hero";
import { Styles } from "../../components/hero/styles";
import useSplitText from "../../hooks/use-split-text";

const HeroHeadingContainer = () => {
  const headingText = "The agency for what comes next.";
  const { textChunks } = useSplitText({ text: headingText });

  return (
    <SlideUpAnimation>
      <Styles.Heading>
        {textChunks.map((chunk, chunkIndex) => (
          <React.Fragment key={String(chunk) + chunkIndex}>
            {chunk.map((word, wordIndex) => {
              const lastChunkId = chunkIndex - 1;
              const lastChunkLastWordId = lastChunkId < 0 ? 0 : textChunks[lastChunkId].length - 1;
              return (
                <HeroHeadingWord key={word} index={chunkIndex + lastChunkLastWordId + wordIndex}>
                  {word}
                </HeroHeadingWord>
              );
            })}
            <br />
          </React.Fragment>
        ))}
      </Styles.Heading>
    </SlideUpAnimation>
  );
};

export default HeroHeadingContainer;
