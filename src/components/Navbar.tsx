import styled from 'styled-components'
import Dropdown from './Dropdown'
import UIConstants from '../utils/ui_constants'
import { IoColorPaletteOutline } from 'react-icons/io5'
import logo from './../img/favicon.png'

const Navbar = (props : any) => {
  console.log(props)
  return (
    <StyledNavbar>
      <div className="logo">
        <img src={logo} />
        <strong>DailyBuddy</strong>
      </div>
      {props.user && (
        <>
          <div className="navbar-block font-resizing-buttons">
            <div className="navbar-button enlarge-font" onClick={() => {
              props.setFontSize(props.fontSize + 1)
            }}>+</div>
            <div className="navbar-button shrink-font" onClick={() => {
              props.setFontSize(props.fontSize - 1)
            }}>-</div>
          </div>
          <div className="navbar-block theme-button">
            <Dropdown 
              default={props.themes[2]}
              options={props.themes}
              onOptionClick={(e : any) => {
                props.setCurrentTheme(e.theme);
            }}>
              <div className="navbar-button next-theme">
                <IoColorPaletteOutline/> 
                <span>Change Theme</span>
              </div>
            </Dropdown>
          </div>
        </>
      )}
      {
        !props.user ? (
          <div className="navbar-block login-button">
            <div className="navbar-button" onClick={props.signIn}>
              Login
            </div>
          </div>
        ) : (
          <div className="navbar-block profile-button">
            <Dropdown options={UIConstants.profileMenu}>
              <div className="navbar-button user-button">
                <div className="user-pic">
                  <img src={props.user.photoURL} />
                </div>
                {props.user.displayName}
              </div>
            </Dropdown>
          </div>
        )
      }
    </StyledNavbar>
  )
}

export default Navbar;

const StyledNavbar = styled.section`
  width: calc((100vw / 12) * 11);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    display: flex;
    align-items: center;
    img {
      height: 3rem;
      margin-right: 1rem;
      position: relative;
      bottom: 0.2rem;
    }
  }
  .navbar-block {
    display: flex;
    margin-left: 2rem;
    .dropdown {
      &.visible {
        top: calc(100% - 1rem);
      }
    }
    &.font-resizing-buttons {
      margin-left: auto;
      .navbar-button {
        padding: 0;
        margin-left: 1rem;
        font-size: 3rem;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    &.theme-button {
      .navbar-button {
        font-size: 2rem;
        span {
          margin-left: 1rem;
        }
      }
    }
    &.login-button {
      .navbar-button {
        background: ${props => props.theme.black};
        color: ${props => props.theme.invertedFont};
        &:hover {
          background: ${props => props.theme.black};
          /* color: ${props => props.theme.font}; */
        }
      }
    }
    &.profile-button {
      font-size: 2rem;
      cursor: pointer;
      position: relative;
      font-weight: 600;
      margin-left: 2rem;
      .user-button {
        border-radius: 0.5rem;
        border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
        background: white;
        .user-pic {
          margin-right: 1rem;
          img {
            height: 3rem;
            border-radius: 4rem;
            /* border: 0.2rem solid ${props => props.theme.border}; */
          }
        }
      }
    }
    .navbar-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${props => props.theme.background};
      padding: 0 2rem;
      min-width: 5rem;
      height: 5rem;
      text-align: center;
      font-size: 2rem;
      font-family: Noto;
      outline: none;
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
      cursor: pointer;
      background: ${props => props.theme.backgroundDark};
      border-radius: 0.6rem;
      transition: 0.15s ease-in-out background-color;
      &:hover {
        background-color: ${props => props.theme.background};
      }
    }
  }
  strong {
    font-size: 3rem;
  }
`;