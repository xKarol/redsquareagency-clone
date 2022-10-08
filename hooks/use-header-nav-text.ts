import { useRouter } from "next/router";
import { useState } from "react";

import { ROUTE_HOME, ROUTE_WORK } from "../constants/routes";

const useHeaderNavText = () => {
  const { pathname } = useRouter();
  const headerText = pathname === "/" ? "Work" : "Red Square";
  const [headerName, setHeaderName] = useState(headerText);
  const href = pathname === ROUTE_HOME ? ROUTE_WORK : ROUTE_HOME;
  return { headerText, headerName, setHeaderName, href };
};

export default useHeaderNavText;
