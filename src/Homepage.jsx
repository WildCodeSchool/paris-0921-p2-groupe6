import React, { useContext } from 'react';
import CurrentUserNameContext from './Contexts/userContext';
import Age from './Components/Age';
import HomeConditions from './Components/HomeConditions';

function HomePage() {
  const { userName } = useContext(CurrentUserNameContext);
  return <main className="Homepage">{userName.length ? <HomeConditions /> : <Age />}</main>;
}

export default HomePage;
