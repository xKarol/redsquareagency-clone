import { motion } from "framer-motion";
import { useContext } from "react";
import AppContext from "../../context/app-context";
import Logo from "../logo";
import HeaderLink from "./HeaderLink";
import { StyledHeader } from "./styles";

function Header() {
  const { firstLoad } = useContext(AppContext);

  return (
    <StyledHeader className="spacing">
      <Logo />
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 1,
            },
          },
          hidden: { opacity: firstLoad ? 0 : 1 },
        }}
      >
        <HeaderLink />
      </motion.div>
    </StyledHeader>
  );
}

export default Header;
