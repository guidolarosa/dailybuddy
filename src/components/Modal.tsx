import styled from "styled-components";
import { useEffect, useState, useRef } from 'react'
import { createPortal } from "react-dom";
import { RiFullscreenLine, RiFullscreenExitLine } from 'react-icons/ri'

let modalRoot : HTMLElement = document.querySelector('#root') as HTMLElement;

const Modal = (props : any) => {

  const [isFullSize, setIsFullSize] = useState<any>(false);
  const [formID, setFormID] = useState<string>('')

  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const element = el.current;
    modalRoot!.appendChild(element);
    return () => void modalRoot!.removeChild(element);
  }, []);

  // console.log(document.querySelector(`#${props.formID}`));

  if (props.isModalOpen && !props.isModalProcessComplete) {
    return createPortal(
      <StyledModal className={`modal-wrapper ${props.size} ${isFullSize ? 'full' : ''}`}>
        <div className="modal">
          <div className="modal-header">
            <h3>{props.header}</h3>
            {isFullSize ? (
              <RiFullscreenLine 
                className="fullsize-toggle" 
                onClick={() => {
                  setIsFullSize(false)
                }} 
              />
            ) : (
              <RiFullscreenExitLine className="fullsize-toggle" onClick={() => {
                setIsFullSize(true)
              }} />
            )}
            <div className="close-button" onClick={
              () => {
                props.setIsModalOpen(false);
                if (props.onCloseClick) {
                  props.onCloseClick();
                }
              }}
            >
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
          <div className="modal-footer">
            <input 
              type={'submit'}
              value={'Cancel'}
              className="secondary" 
              onClick={(e) => {props.onCancelClick(e)}}
            />
            {props.formID ? (
              <input 
                type="submit"
                value={'Save'}
                form={props.formID}
                className="primary" 
              />
              ) : (
              <input 
                type="button"
                value={'Save'}
                className="primary" 
                onClick={(e) => {props.onSaveClick(e)}}
              />
            )}
          </div>
        </div>
        <div className="underlay" />
      </StyledModal>,
      modalRoot
    );
  } else {
    return (<></>)
  }
};

Modal.defaultProps = {
  size: 'medium',
  header: 'Modal empty',
  childrer: <p>Modal empty</p>
}

const StyledModal = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  &.large {
    .modal {
      width: calc((100vw / 12) * 6);
      left: calc((100vw / 12) * 3);
    }
  }
  &.medium {
    .modal {
      width: calc((100vw / 12) * 5);
      left: calc((100vw / 12) * 3.5);
    }
  }
  &.small {
    .modal {
      width: calc((100vw / 12) * 4);
      left: calc((100vw / 12) * 4);
    }
  }
  &.full {
    .modal {
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      border-radius: 0;
      border: 0;
      .modal-body,
      .modal-footer {
        width: calc((100% / 12) * 6);
        margin: 0 auto;
      }
      .modal-body {
        padding-top: 8rem;
      }
    }
  }
  .modal {
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
      .fullsize-toggle {
        width: 3rem;
        height: 3rem;
        position: relative;
        cursor: pointer;
        margin-left: auto;
        margin-right: 1rem;
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
    .modal-body {
      padding: 2rem;
      font-size: 2rem;
      p {
        margin-bottom: 2rem;
        line-height: 3rem;
      }
    }
    .modal-footer {
      display: flex;
      justify-content: right;
      padding: 0 2rem 2rem;
      input {
        height: 5rem;
        font-size: 2rem;
        margin-left: 1rem;
        padding: 0 2rem;
        font-family: Noto;
        outline: 0;
        border-radius: 0.5rem;
        border: 0;
        cursor: pointer;
        &.primary {
          background: ${props => props.theme.black};
          color: ${props => props.theme.invertedFont};
        }
        &.secondary {
          border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
          background: none;
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
