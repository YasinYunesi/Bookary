import { createContext, useState } from "react";

const AppContext = createContext();

const StateProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("run");
  const [filter, setFilter] = useState("partial");
  const [printType, setPrintType] = useState("all");

  // Sign in/out slice
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

  // Book search slice
  const searchQueryEvent = (actionType, payload) => {
    switch (actionType) {
      case "CHANGE_QUERY":
        setQuery(payload.query);
        return;
      case "CHANGE_FILTER":
        setFilter(payload.filter);
        return;
      case "CHANGE_PRINT_TYPE":
        setPrintType(payload.printType);
        return;

      default:
        return;
    }
  };

  // JSX /////////////////////////////
  return (
    <AppContext.Provider value={{ user, dispatchUserEvent, query, filter, printType, searchQueryEvent }}>
      {children}
    </AppContext.Provider>
  );
};

export default StateProvider;

export { AppContext };
