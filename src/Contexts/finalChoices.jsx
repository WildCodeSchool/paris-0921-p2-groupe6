import React, { createContext, useState } from 'react';

const CurrentFinalChoicesContext = createContext({
  userChoice: [],
  setUserChoice: () => {},
  numberChoice: Number(),
  setNumberChoice: () => {},
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
