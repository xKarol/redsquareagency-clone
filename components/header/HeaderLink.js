import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import AppContext from "../../context/app-context";
import { useContext } from "react";
import HeaderNav from "./HeaderNav";

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

  return (
    <motion.div
      animate={firstLoad ? controls : "visible"}
      initial="hidden"
      variants={variants}
      exit={{ translateX: 25, opacity: 0, transition: { duration: 0.4 } }}
    >
      <Link href={pathname === "/" ? "/work" : "/"}>
        <a>
          <HeaderNav>{pathname === "/" ? "Work" : "Red Square"}</HeaderNav>
        </a>
      </Link>
    </motion.div>
  );
}

export default HeaderLink;
