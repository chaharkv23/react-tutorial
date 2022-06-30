import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  // take two parameters, one for checking the key already present in the localStorage or not,
  // other is for dependency, it will reexecute only when the dependency change .
  useEffect(()=>{
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  // It will create a infinite loop, because we check if it is stored, we set this to true,
  // and whenever we call set stating function , this component function re-executes, this would found '1',
  // set it again to true and so on..To overcome this problem, we use UseEffect() which allows control window run.
  if(storedUserLoggedInInformation==='1'){
    setIsLoggedIn(true)
  }
  },[])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem('isLoggedIn','1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;