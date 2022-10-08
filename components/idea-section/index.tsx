import Heading from "./heading";
import { StyledIdeaSection } from "./styles";
import Text from "./text";

function IdeaSection() {
  return (
    <StyledIdeaSection className="container">
      <Heading />
      <Text />
    </StyledIdeaSection>
  );
}

export default IdeaSection;
