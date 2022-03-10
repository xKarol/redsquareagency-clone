import {
  StyledAllProjectsContainer,
  StyledAllProjectsBox,
  StyledAllProjectsBlur,
  StyledAllProjectsText,
} from "./styles";
import Link from "next/link";
import HeaderNav from "../header/HeaderNav";

function AllProjects() {
  return (
    <StyledAllProjectsContainer>
      <Link href="/work" passHref scroll={false}>
        <StyledAllProjectsBox>
          <StyledAllProjectsBlur>
            <StyledAllProjectsText>
              <span>All Projects</span>
              <HeaderNav>Work</HeaderNav>
            </StyledAllProjectsText>
          </StyledAllProjectsBlur>
        </StyledAllProjectsBox>
      </Link>
    </StyledAllProjectsContainer>
  );
}

export default AllProjects;
