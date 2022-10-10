import React from "react";

import { SlideUpAnimation } from "../../animations/hero";
import { Styles } from "../../components/hero/styles";
import useSplitText from "../../hooks/use-split-text";
import HeroHeadingWordContainer from "./hero-heading-word";

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
                <HeroHeadingWordContainer
                  key={word}
                  index={chunkIndex + lastChunkLastWordId + wordIndex}>
                  {word}
                </HeroHeadingWordContainer>
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
