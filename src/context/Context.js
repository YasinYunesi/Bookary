import { createContext, useState } from "react";

const AppContext = createContext();

const StateProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "SIGN_IN":
        setUser(payload.newUser);
        return;
      case "SIGN_OUT":
        setUser([]);
        return;

      default:
        return;
    }
  };

  // JSX /////////////////////////////
  return <AppContext.Provider value={{ user, dispatchUserEvent }}>{children}</AppContext.Provider>;
};

export default StateProvider;

export { AppContext };
