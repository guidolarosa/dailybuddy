import { useState, useEffect  } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import TaskList from './../components/TaskList';
import UnsignedMainView from './../components/UnsignedMainView';
import UIConstants from './../utils/ui_constants';

import Modal from './../components/Modal';
import { getFirebaseUserTasks, getGoogleUserData } from '../utils/firebase';

const App = (props : any) => {

  const [showLoginModal, setShowLoginModal] = useState({});
  
  
  const {
    isSidebarVisible,
    setIsSidebarVisible,
    fontSize,
    setFontSize,
    setCurrentTheme,
    currentTheme,
    user,
    setUser,
    setIsUserSignedIn,
    isUserSignedIn,
    handleLoginClick,
    setTasks,
    tasks
  } = props;
  
  useEffect(() => {
    let uid = window.sessionStorage.getItem('uid');
    getFirebaseUserTasks(uid as string).then((userTasks) => {
      getGoogleUserData().then((user : any) => {
        console.log(user)
        setUser(user);
      })
      setTasks(userTasks);
    })
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <StyledApp className={`App ${!isSidebarVisible ? 'sidebar-hidden' : ''}`}>
      <Header 
        fontSize={fontSize}
        setFontSize={setFontSize} 
        setCurrentTheme={setCurrentTheme}
        currentTheme={currentTheme}
        user={user}
        setUser={setUser}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        themes={UIConstants.themes}
      />
      <main>
        <TaskList 
          setTasks={setTasks} 
          tasks={tasks}
          user={user}
        />
      </main>
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: calc((100vw / 12) * 9) calc((100vw / 12) * 3);
  grid-template-rows: 10rem calc((100vh - 10rem));
  grid-template-areas: 
    "header header"
    "main sidebar";
  color: ${props => props.theme.font};
  transition: 0.25s ease-in-out all;
  &.sidebar-hidden {
    grid-template-columns: calc((100vw / 12) * 11.75) calc((100vw / 12) * 0.25);
  }
  main {
    grid-area: main;
    padding: 4rem 0;
    background-color: ${props => props.theme.background};
    overflow-y: scroll;
  }
  @media screen and (max-width: ${props => props.theme.breakpoint_xl}) {
    grid-template-columns: calc((100vw / 12) * 8) calc((100vw / 12) * 4);
  }
  @media screen and (max-width: ${props => props.theme.breakpoint_m}) {
    grid-template-columns: 100%;
    grid-template-rows: 10rem calc((100vh - 20rem)) 10rem;
    grid-template-areas: 
      "header"
      "main"
      "sidebar"
  }
`;

export default App;