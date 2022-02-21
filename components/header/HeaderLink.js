import { StyledLink } from "./styles";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import AppContext from "../../context/app-context";
import { useContext } from "react";

function HeaderLink() {
  const { pathname } = useRouter();
  const controls = useAnimation();
  const { firstLoad } = useContext(AppContext);

  const variants = {
    visible: {
      opacity: firstLoad ? 0 : 1,
      translateX: firstLoad ? 25 : 0,
      transition: { duration: 0.4 },
    },
    hidden: { opacity: firstLoad ? 1 : 0, translateX: firstLoad ? 0 : -25 },
  };

  const handleChangeRoute = () => {
    controls.start("visible");
  };

  return (
    <motion.div
      animate={firstLoad ? controls : "visible"}
      initial="hidden"
      variants={variants}
    >
      <Link href={pathname === "/" ? "/work" : "/"} passHref>
        <StyledLink className="bg-hover-blur" onClick={handleChangeRoute}>
          <span>{pathname === "/" ? "Work" : "Red Square"}</span>
          <BiChevronRight />
        </StyledLink>
      </Link>
    </motion.div>
  );
}

export default HeaderLink;
