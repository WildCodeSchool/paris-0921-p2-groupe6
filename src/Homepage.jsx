import React, { useContext } from 'react';

import CurrentUserNameContext from './Contexts/userContext';

import HomeConditions from './Components/HomeConditions';

import Age from './Components/Age';

function HomePage() {
  const { userName } = useContext(CurrentUserNameContext);
  return <main className="Homepage">{userName.length ? <HomeConditions /> : <Age />}</main>;
}

export default HomePage;
