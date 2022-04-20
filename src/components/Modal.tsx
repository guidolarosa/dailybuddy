import styled from "styled-components";
import { useEffect, useRef } from 'react'
import { createPortal } from "react-dom";

let modalRoot : HTMLElement = document.querySelector('#root') as HTMLElement;

const Modal = (props : any) => {

  const el = useRef(document.createElement("div"));
  useEffect(() => {

    modalRoot!.appendChild(el.current);
    return () => void modalRoot!.removeChild(el.current);
  }, []);

  return createPortal(
    <StyledModal className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h3>{props.header}</h3>
          <div className="close-button" onClick={() => {props.onCloseClick()}}>
            <div/><div/>
          </div>
        </div>
        <div className="modal-body"></div>
      </div>
      <div className="underlay" />
    </StyledModal>,
    modalRoot
  );
};

const StyledModal = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  .modal {
    height: 30rem;
    width: calc((100vw / 12) * 4);
    position: absolute;
    background:  ${props => props.theme.background};
    border-radius: 2rem;
    left: calc((100vw / 12) * 4);
    top: 14rem;
    box-shadow: ${props => props.theme.dropdownShadow};
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .modal-header {
      height: 6rem;
      background: ${props => props.theme.backgroundDark};
      align-items: center;
      display: flex;
      padding: 0 2rem;
      justify-content: space-between;
      h3 {
        font-size: 2rem;
      }
      .close-button {
        width: 3rem;
        height: 3rem;
        position: relative;
        cursor: pointer;
        div {
          height: 0.2rem;
          width: 3rem;
          background: ${props => props.theme.font};
          position: absolute;
          top: 50%;
          &:first-child {
            transform: rotate(45deg);
          }
          &:last-child {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .underlay {
    background: ${props => props.theme.backgroundUnderlay};
    width: inherit;
    height: inherit;
  }
`;

export default Modal;
