import HeaderLink from "../header/HeaderLink";
import {
  StyledAllProjectsContainer,
  StyledAllProjectsBox,
  StyledAllProjectsBlur,
  StyledAllProjectsText,
} from "./styles";
import Link from "next/link";

function AllProjects() {
  return (
    <StyledAllProjectsContainer>
      <Link href="/work" passHref>
        <StyledAllProjectsBox>
          <StyledAllProjectsBlur>
            <StyledAllProjectsText>
              <span>All Projects</span>
              <HeaderLink />
            </StyledAllProjectsText>
          </StyledAllProjectsBlur>
        </StyledAllProjectsBox>
      </Link>
    </StyledAllProjectsContainer>
  );
}

export default AllProjects;
