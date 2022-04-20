import './css/fonts.css';
import './css/global.css';
import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme, darkTheme, plantasia, aqua, apple} from './utils/theme'
import { Themes } from './types/Theme'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';

function App() {
  const [fontSize, setFontSize] = useState(8);
  const [currentTheme, setCurrentTheme] = useState('plantasia');
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const themes : Themes = {
    'light': theme,
    'dark': darkTheme,
    'plantasia': plantasia,
    'aqua': aqua,
    'apple': apple
  };

  let themeArray : any = [];
  for (const [key, value] of Object.entries(themes)) {
    themeArray.push({name: key});
  };

  const getCurrentThemeIndex = (currentTheme: string) => {
    let themeIndex : number = 0;
    themeArray.forEach((theme: { name: string}, index : number) => {
      if (theme.name == currentTheme) {
        themeIndex = index;
      };
    });
    return themeIndex;
  };

  const nextTheme = () => {
    if (currentThemeIndex == themeArray.length - 1) {
      setCurrentThemeIndex(0);
    } else {
      setCurrentThemeIndex(currentThemeIndex + 1);
    }
  }
  
  useEffect(() => {
    let currentThemeIndex = getCurrentThemeIndex(currentTheme);
    setCurrentThemeIndex(currentThemeIndex);
  }, [])

  useEffect(() => {
    let html = document.querySelector('html');
    if (html) {
      html.style.fontSize = `${fontSize}px`;
    };
  }, [fontSize]);

  return (
    <ThemeProvider theme={themes[themeArray[currentThemeIndex].name as keyof Themes]}>
      <StyledApp className={`App ${!isSidebarVisible ? 'sidebar-hidden' : ''}`}>
        <Header 
          fontSize={fontSize}
          setFontSize={setFontSize} 
          setCurrentTheme={setCurrentTheme}
          currentTheme={currentTheme}
          nextTheme={nextTheme}
        />
        <main>
          <TaskList />
        </main>
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
      </StyledApp>
    </ThemeProvider>
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
  &.sidebar-hidden {
    grid-template-columns: calc((100vw / 12) * 11.75) calc((100vw / 12) * 0.25);
  }
  main {
    grid-area: main;
    padding-top: 4rem;
    background-color: ${props => props.theme.background};
  }
`;

export default App;
