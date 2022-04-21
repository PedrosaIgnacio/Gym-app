import React, { createContext, ReactElement, ReactNode, useState } from "react";
import { string } from "yup";

interface IUserContextValues {
  username: string;
  login: (username: string, password: string) => void;
  logout: () => void;
}

interface IUserProviderValues {
  children: ReactNode;
}

const UserContext = createContext<IUserContextValues>({
  username: "",
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: IUserProviderValues): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const login = (username: string, password: string) => {
    if (username === "Nacho" && password === "12345") {
      setUsername(username);
    }
  };
  const logout = () => {
    setUsername("");
  };
  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
export { UserProvider };
