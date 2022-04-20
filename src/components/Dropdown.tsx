import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef, useCallback } from "react"

const Dropdown = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // If dropdown is present, add event listener, if not , remove it
    if (isVisible) {
      document.body.addEventListener('click', handleOutClick, true);
    } else {
      document.body.removeEventListener('click', handleOutClick, true);
      props.onOutClick();
    }
    
    return () => {
      document.body.removeEventListener('click', handleOutClick)
    }
  }, [isVisible]);

  const handleOutClick = useCallback((e: any) => {
    let sidebarMenuToggle = document.querySelector('.sidebar-menu-toggle');
    if (e.target.classList.contains('sidebar-menu-toggle') ||  sidebarMenuToggle?.contains(e.target)) {
      // console.log(dropdownRef.current);
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
        props.onTargetClick()
        setIsVisible(!isVisible); 
      }}>
        {props.children}
      </div>
      <div className={`dropdown ${isVisible ? 'visible' : null}`} ref={dropdownRef}>
        <ul>
          {props.options.map((option: any, i: number) => (
            <li key={i}>{option.label}</li>
          ))}
        </ul>
      </div>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: relative;
  .dropdown {
    position: absolute;
    top: 8rem;
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
    transform-origin: top right;
    transform: translateY(2rem) scale(0.8) !important;
    &.visible {
      transform-origin: top right;
      transform: translateY(2rem) scale(1) !important;
      opacity: 1;
      top: 2rem;
      visibility: visible;
    }
    ul {
      li {
        height: 5rem;
        padding: 0 2rem;
        line-height: 5rem;
        font-size: 2rem;
        cursor: pointer;
        transition: 0.15s ease-in-out background-color;
        &:hover {
          background-color: ${(props) => props.theme.backgroundDark};
        }
      }
    }
  }
`;

export default Dropdown;
