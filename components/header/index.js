import { motion } from "framer-motion";
import Logo from "../logo";
import HeaderLink from "./HeaderLink";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader className="spacing">
      <Logo />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 1,
            },
          },
          hidden: { opacity: 0 },
        }}
      >
        <HeaderLink />
      </motion.div>
    </StyledHeader>
  );
}

export default Header;
