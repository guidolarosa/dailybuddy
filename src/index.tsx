import './css/fonts.css';
import './css/global.css';

import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import UIConstants from './utils/ui_constants'
import { auth, signInWithGoogle, getGoogleUserData, getFirebaseUserTasks } from './utils/firebase'
import { ThemeProvider } from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root = (props : any) => {
  const [currentTheme, setCurrentTheme] = useState(UIConstants.themes[0].theme);
  const [fontSize, setFontSize] = useState(8);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>();
  const [user, setUser] = useState<any>({});
  const [tasks, setTasks] = useState<any>([]);

  useEffect(() => {
    AOS.init();
  }, [])


  useEffect(() => {
    console.log(user);
    if (user) {
      getFirebaseUserTasks(user.uid).then((userTasks) => {
        setTasks(userTasks);
      })
    }
  }, [user])

  const handleLoginClick = () => {
    signInWithGoogle().then((result) => {
      if (result) {
        setIsUserSignedIn(true);
        setUser(result.user);
        window.location.href = '/app';
        window.sessionStorage.setItem('uid', result.user.uid);
        // getGoogleUserData().then(user => {
        // })
      }
    })
  };

  useEffect(() => {
    let user = auth.currentUser;
    if (user !== null) {
      setUser(user);
      setIsUserSignedIn(true);
    }
  }, []);

  useEffect(() => {
    let html = document.querySelector('html');
    if (html) {
      html.style.fontSize = `${fontSize}px`;
    };
  }, [fontSize]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Home 
                isUserSignedIn={isUserSignedIn}
                handleLoginClick={handleLoginClick}
              />
            } />
            <Route path="/app" element={
              <App 
                fontSize={setFontSize}
                setIsSidebarVisible={setIsSidebarVisible}
                isUserSignedIn={isUserSignedIn}
                user={user}
                currentTheme={currentTheme} 
                setCurrentTheme={setCurrentTheme}
                handleLoginClick={handleLoginClick}
                tasks={tasks}
                setUser={setUser}
                setTasks={setTasks}
                isSidebarVisible={isSidebarVisible}
              />
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}

root.render(
 <Root />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
