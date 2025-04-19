import { ReactNode } from "react";
import TodosProvider from "./TodosProvider";

type AppProviderProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProviderProps) => {
  return <TodosProvider>{children}</TodosProvider>;
};

export default AppProviders;
