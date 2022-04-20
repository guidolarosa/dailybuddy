import styled from 'styled-components'

const Navbar = (props : any) => {
  return (
    <StyledNavbar>
      <strong>DailyBuddy</strong>
      <div className="navbar-buttons font-resizing-buttons">
        <div className="navbar-button enlarge-font" onClick={() => {
          props.setFontSize(props.fontSize + 1)
        }}>+</div>
        <div className="navbar-button shrink-font" onClick={() => {
          props.setFontSize(props.fontSize - 1)
        }}>-</div>
      </div>
      <div className="navbar-buttons theme-button">
        <div className="navbar-button next-theme" onClick={() => {
          // setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light' );
          props.nextTheme();
        }}>Theme</div>
      </div>
    </StyledNavbar>
  )
}

export default Navbar;

const StyledNavbar = styled.section`
  width: calc((100vw / 12) * 10);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbar-buttons {
    display: flex;
    &.font-resizing-buttons {
      margin-left: auto;
    }
    &.theme-button {
      div {
        font-size: 2rem;
        padding: 0 1rem;
      }
    }
    div {
      min-width: 3rem;
      height: 3rem;
      font-size: 3rem;
      text-align: center;
      line-height: 3rem;
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
      margin-left: 1rem;
      cursor: pointer;
      background: ${props => props.theme.backgroundExtraDark};
      border-radius: 0.6rem;
      transition: 0.15s ease-in-out background-color;
      &:hover {
        background-color: ${props => props.theme.blackOpc2};
      }
    }
  }
  strong {
    font-size: 3rem;
  }
`;