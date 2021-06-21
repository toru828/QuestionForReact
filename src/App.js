import React, { Fragment, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './store/AuthContext';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;