import styled from "styled-components";
import Dropdown from './Dropdown';
import { useState } from 'react';
import Schedule from './Schedule';
import Notes from './Notes';


const Sidebar = (props: any) => {
  const sidebarMenu = {
    0: {label: 'Schedule', value: 'schedule'},
    1: {label: 'Dashboard', value: 'dashboard'},
    2: {label: 'Notes', value: 'notes'}
  }

  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState<boolean>(false);
  const [sidebarSection, setSidebarSection] = useState(sidebarMenu[0]);


  return (
    <StyledSidebar className={`sidebar ${!props.isSidebarVisible ? 'sidebar-hidden' : ''}`} onClick={() => {
      if (!props.isSidebarVisible) {
        props.setIsSidebarVisible(true);
      }
    }}>
      {props.isSidebarVisible && (
        <section className="sidebar-header">
            <h2>
              {sidebarSection.label}
            </h2>
            <Dropdown
              options={sidebarMenu}
              onTargetClick={() => {
                setIsSidebarMenuOpen(!props.isSidebarMenuOpen);
              }}
              onOutClick={() => {
                setIsSidebarMenuOpen(false);
              }}
              onOptionClick={setSidebarSection}
            >
              <div
                className={`sidebar-menu-toggle ${
                  isSidebarMenuOpen ? "toggle-active" : ""
                }`}
              >
                <div />
                <div />
                <div />
                <div />
              </div>
            </Dropdown>
        </section>
      )} 
      {props.isSidebarVisible && (
        <section className="sidebar-body">
          {sidebarSection.value === 'schedule' && 
            <Schedule 
              sidebarMenuOpen={isSidebarMenuOpen} 
              setIsSidebarMenuOpen={setIsSidebarMenuOpen}
              sidebarMenu={sidebarMenu} 
            />
          }
          {sidebarSection.value === 'notes' && <Notes/>}
          {/* {sidebarSection === 'dashboard' && <Dashboard/>} */}
        </section>
      )}
      <div className="sidebar-hide-toggler" onClick={() => {props.setIsSidebarVisible(!props.isSidebarVisible)}}>
        <div className="icon">▲</div>
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.section`
  grid-area: sidebar;
  border-left: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
  background-color: ${props => props.theme.backgroundDark};
  position: relative; 
  &.sidebar-hidden {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.backgroundExtraDark};
      max-width: 100vh;
    }
    .sidebar-hide-toggler {
      position: static;
      border: 0;
      background: none;
      .icon {
        transform: rotate(-90deg) translateY(-0.5rem);
        font-size: 3rem;
      }
    }
  }
  .sidebar-header {
    padding: 0;
    padding: 3rem;
    padding: 4rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: none !important;
    h2 {
      font-size: 5rem;
    }
    .sidebar-menu-toggle {
      width: 3rem;
      height: 3rem;
      position: relative;
      top: 0.5rem;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        width: 5rem;
        height: 5rem;
        top: -1.2rem;
        left: -1rem;
        background: ${props => props.theme.backgroundExtraDark};
        border-radius: 0.5rem;
        opacity: 0;
        transition: 0.15s ease-in-out all;
      }
      &:hover {
        &:before {
          opacity: 1;
        }
      }
      div {
        height: 0.2rem;
        width: 3rem;
        background:  ${props => props.theme.font};
        position: absolute;
        top: 0;
        transition: 0.25s ease-in-out all;
        &:nth-child(2),
        &:nth-child(3) {
          top: 1rem;
        }
        &:nth-child(4) {
          top: 2rem;
        }
      }
      &.toggle-active {
        div {
          &:nth-child(4),
          &:first-child {
            opacity: 0;
          }
          &:nth-child(2) {
            transform: rotate(45deg);
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .sidebar-body {
    overflow-y: scroll;
    height: calc(100vh - 23rem);
  }
  .sidebar-hide-toggler {
    position: absolute;
    bottom: 1rem;
    left: -6rem;
    width: 4rem;
    height: 4rem;
    background: ${props => props.theme.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    cursor: pointer;
    .icon {
      font-size: 3rem;
      line-height: 6rem;
      transform: rotate(90deg) translateY(-0.5rem);
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${props => props.theme.backgroundUnderlay};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .login-message {
      width: calc(100% - 16rem); 
      margin: auto;
      padding: 4rem 2rem;
      background: ${props => props.theme.backgroundDark};
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
      border-radius: 1rem;
      span {
        font-size: 3rem;
        text-align: center;
        line-height: 4rem;
        display: inline-block;
        span {
          text-transform: lowercase;
        }
      }
    }
  }
  @media screen and (max-width: ${props => props.theme.breakpoint_m}) {
    border: 0;
    border-top: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    .sidebar-header {
      height: 10rem;
      padding: 0 calc(100vw / 12);
    }
    .sidebar-body {
      display: none;
    }
  }
`;

export default Sidebar;
