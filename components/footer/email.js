import { StyledEmail, StyledEmailHeading } from "./styles";

function Email() {
  return (
    <StyledEmail href="mailto:hi@rsq.com">
      <StyledEmailHeading>Let&apos;s talk.</StyledEmailHeading>
      <span>hi@rsq.com</span>
    </StyledEmail>
  );
}

export default Email;
