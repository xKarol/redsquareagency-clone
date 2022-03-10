import {
  StyledAllProjectsContainer,
  StyledAllProjectsBox,
  StyledAllProjectsBlur,
  StyledAllProjectsText,
} from "./styles";
import Link from "next/link";
import HeaderNav from "../header/HeaderNav";
import { motion } from "framer-motion";

function AllProjects() {
  return (
    <StyledAllProjectsContainer>
      <motion.div
        initial={{ width: "100%", display: "flex", height: "100%" }}
        exit={{
          height: "calc(100vw / 2)",
          y: "calc((-100vw / 2) - 270px)",
        }}
        transition={{ delay: 0.5, duration: 1 }}
      >
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
      </motion.div>
    </StyledAllProjectsContainer>
  );
}

export default AllProjects;
