import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import { authService } from "fbase";

const App = () => {

  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoUrl: user.photoURL,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
    changeBg();
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      photoUrl: user.photoURL,
      updateProfile: (args) => user.updateProfile(args)
    });
  }
  const changeBg = () => {
    const month = new Date().getMonth() + 1;
    const bg = document.querySelector("body");
    if (month >= 3 && month <= 5) {
      // 봄
      bg.style.backgroundImage = "url('https://images.pexels.com/photos/4619953/pexels-photo-4619953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    } else if (month >= 6 && month <= 8) {
      // 여름
      bg.style.backgroundImage = "url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3601425.jpg&fm=jpg')";
    } else if (month >= 9 && month <= 11) {
      // 가을
      bg.style.backgroundImage = "url('https://images.pexels.com/photos/1585894/pexels-photo-1585894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    } else {
      // 겨울
      bg.style.backgroundImage = "url('https://images.pexels.com/photos/1417647/pexels-photo-1417647.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')";
    }
  }

  return (
    <>
      {init ?
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser} />
        : <div className="loader">Loading...</div>}
      <footer>&copy; {new Date().getFullYear()} Slothwitter </footer>
    </>
  );
}

export default App;
