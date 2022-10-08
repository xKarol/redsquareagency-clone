import { createContext } from "react";

type Props = { firstLoad: boolean };

const AppContext = createContext({} as Props);

export default AppContext;
