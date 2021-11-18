import React, { createContext, useState } from 'react';

const CurrentFinalChoicesContext = createContext({
  userChoice: [],
  setUserChoice: () => {},
});

export function CurrentFinalChoicesContextProvider({ children }) {
  const [userChoice, setUserChoice] = useState([]);
  const [numberChoice, setNumberChoice] = useState();

  return (
    <CurrentFinalChoicesContext.Provider value={{ userChoice, setUserChoice, numberChoice, setNumberChoice }}>
      {children}
    </CurrentFinalChoicesContext.Provider>
  );
}

export default CurrentFinalChoicesContext;
