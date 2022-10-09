import Link from "next/link";

import { SlideOutAnimation } from "../../animations/footer";
import {
  StyledAllProjectsBlur,
  StyledAllProjectsBox,
  StyledAllProjectsContainer,
  StyledAllProjectsText,
} from "../../components/footer";
import { HeaderNavigationButton } from "../../components/header";
import { ROUTE_WORK } from "../../constants/routes";

const FooterAllProjectsContainer = () => {
  return (
    <StyledAllProjectsContainer>
      <SlideOutAnimation>
        <Link href={ROUTE_WORK} passHref scroll={false}>
          <StyledAllProjectsBox>
            <StyledAllProjectsBlur>
              <StyledAllProjectsText>
                <span>All Projects</span>
                <HeaderNavigationButton>Work</HeaderNavigationButton>
              </StyledAllProjectsText>
            </StyledAllProjectsBlur>
          </StyledAllProjectsBox>
        </Link>
      </SlideOutAnimation>
    </StyledAllProjectsContainer>
  );
};

export default FooterAllProjectsContainer;
