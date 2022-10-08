import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { ROUTE_HOME, ROUTE_WORK } from "../../constants/routes";
import AppContext from "../../context/app-context";
import HeaderNav from "./header-nav";

function HeaderLink() {
  const { pathname } = useRouter();
  const controls = useAnimation();
  const { firstLoad } = useContext(AppContext);
  const headerText = pathname === "/" ? "Work" : "Red Square";
  const [headerName, setHeaderName] = useState(headerText);

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
      style={{ width: "max-content", overflow: "hidden" }}
      animate={firstLoad ? controls : "visible"}
      initial="hidden"
      variants={variants}
      exit={{ translateX: 25, opacity: 0, transition: { duration: 0.4 } }}
      onAnimationComplete={() => setHeaderName(headerText)}>
      <Link href={pathname === ROUTE_HOME ? ROUTE_WORK : ROUTE_HOME}>
        <a>
          <HeaderNav>{headerName}</HeaderNav>
        </a>
      </Link>
    </motion.div>
  );
}

export default HeaderLink;
