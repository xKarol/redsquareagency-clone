import Tilt from "react-parallax-tilt";

import { StyledEmail, StyledEmailHeading } from "./styles";

function Email() {
  return (
    <StyledEmail href="mailto:hi@mail.com" className="bg-hover-blur bg-hover-blur__email">
      <Tilt transitionSpeed={2000} tiltReverse={true} tiltMaxAngleY={10}>
        <StyledEmailHeading>Let&apos;s talk.</StyledEmailHeading>
        <span className="email">hi@mail.com</span>
      </Tilt>
    </StyledEmail>
  );
}

export default Email;
