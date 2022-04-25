import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef, useCallback } from "react"

const Dropdown = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // If dropdown is present, add event listener, if not , remove it
    if (isVisible) {
      document.body.addEventListener('click', handleOutClick, true);
    } else {
      document.body.removeEventListener('click', handleOutClick, true);
      if (props.onOutClick) {
        props.onOutClick();
      }
    }

    
    
    return () => {
      document.body.removeEventListener('click', handleOutClick)
    }

  }, [isVisible]);

  const handleOutClick = useCallback((e: any) => {
    let sidebarMenuToggle = document.querySelector('.sidebar-menu-toggle');

    if (
      e.target.classList.contains('sidebar-menu-toggle') || 
      sidebarMenuToggle?.contains(e.target)) {
    } else {
      if (dropdownRef.current) {
        const element = dropdownRef.current as HTMLElement;
        element.classList.add('hidden');
        setIsVisible(false);
      }
    }
  }, [])

  return (
    <StyledDropdown className="dropdown-wrapper">
      <div onClick={(e) => { 
        setIsVisible(!isVisible); 
        if (props.onTargetClick) {
          props.onTargetClick()
        }
      }}>
        <div className="dropdown-label">
          {props.children}
          {/* <div className="icon">▲</div> */}
        </div>
      </div>
      <div className={`dropdown ${isVisible ? 'visible' : ''}`} ref={dropdownRef}>
        <ul>
          {Object.keys(props.options).map((key) => {
            let keyToNumber = parseInt(key);
            return (
              <li 
                className={selectedOption === keyToNumber ? 'selected' : ''}
                key={key}
                onClick={() => { 
                  setSelectedOption(keyToNumber);
                  props.onOptionClick(props.options[key]) 
                }}
              >
                {props.options[key].label.icon ? (
                  <>
                    <div className="icon">
                      {props.options[key].label.icon}
                    </div>
                    <span>{props.options[key].label.text}</span>
                  </>
                ) : (
                  <>
                    {props.options[key].label}
                  </>
                )}
              </li>
            )}
          )}
        </ul>
      </div>
    </StyledDropdown>
  );
};

Dropdown.defaultProps = {
  default: 0
};

const StyledDropdown = styled.div`
  position: relative;
  .dropdown-label {
    display: flex;
    align-items: center;
    .icon {
      font-size: 2rem;
    }
  }
  .dropdown {
    position: absolute;
    top: calc(100% + 2rem);
    right: 0;
    background: ${(props) => props.theme.background};
    min-width: 24rem;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    border-radius: 0.5rem;
    z-index: 1;
    transition: 0.25s ease-in-out all;
    opacity: 0;
    visibility: hidden;
    box-shadow: ${props => props.theme.dropdownShadow};
    transform-origin: 100% -200%;
    transform: translateY(2rem) scale(0.8) !important;
    overflow: hidden;
    &.visible {
      transform-origin: 100% -200%;
      transform: translateY(2rem) scale(1) !important;
      opacity: 1;
      top: calc(100% - 1rem);
      visibility: visible;
    }
    ul {
      li {
        height: 5rem;
        padding: 0 2rem;
        line-height: 5rem;
        font-size: 2rem;
        font-weight: 400;
        cursor: pointer;
        text-transform: capitalize;
        transition: 0.15s ease-in-out background-color;
        display: flex;
        align-items: center;
        .icon {
          display: flex;
          align-items: center;
          margin-right: 1rem;
        }
        &.selected {
          font-weight: 600 !important;
          background-color: ${(props) => props.theme.backgroundDark};
        }
        &:hover {
          background-color: ${(props) => props.theme.backgroundDark};
        }
      }
    }
  }
`;

export default Dropdown;
