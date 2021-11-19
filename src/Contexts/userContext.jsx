import React, { createContext, useState } from 'react';

const CurrentUserNameContext = createContext({
  userName: '',
  setUserName: () => {},
});

export function CurrentUserNameContextProvider({ children }) {
  const [userName, setUserName] = useState('');

  return (
    <CurrentUserNameContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </CurrentUserNameContext.Provider>
  );
}

export default CurrentUserNameContext;
