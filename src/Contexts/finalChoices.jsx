import React, { createContext, useState } from 'react';

const CurrentFinalChoicesContext = createContext({
  userChoice: [],
  setUserChoice: () => {},
});

export function CurrentFinalChoicesContextProvider({ children }) {
  const [userChoice, setUserChoice] = useState([]);

  return <CurrentFinalChoicesContext.Provider value={{ userChoice, setUserChoice }}>{children}</CurrentFinalChoicesContext.Provider>;
}

export default CurrentFinalChoicesContext;
