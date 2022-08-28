import { createContext, ReactNode, useContext, useState } from "react";

interface IContext {
  open: boolean;
  toggle: () => void;
}

const Context = createContext<IContext>({} as IContext);

interface INavProvider {
  children: ReactNode;
}

export const NavProvider = ({ children }: INavProvider) => {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen(!open);

  return (
    <Context.Provider value={{ toggle, open }}>{children}</Context.Provider>
  );
};

const useNav = () => {
  return useContext(Context);
};

export default useNav;
