import { createContext, useContext } from "react";

type Props = { firstLoad: boolean };

const AppContext = createContext({} as Props);

export const useAppContext = () => useContext(AppContext);

export default AppContext;
