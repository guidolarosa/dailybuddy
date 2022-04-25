import styled from "styled-components";
import { useEffect, useState } from 'react'
import Modal from "./Modal";
import { AddTask, getFirebaseUserTasks } from './../utils/firebase' 
import Header from "./Header";


const CreateTaskModal = (props: any) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isTaskNameVerified, setIsTaskNameVerified] = useState(false);



  const onConfirmClick = (e : any) => {
    // console.log(e);
  };

  const onCancelClick = (e : any) => {
    // console.log(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (taskName.length > 0) {
      setIsTaskNameVerified(true)
      AddTask({
        name: taskName,
        description: taskDescription
      }).then((result) => {
        if (result != undefined) {
          getFirebaseUserTasks(props.userUID).then((tasks) => {
            props.setTasks(tasks);
          });
          props.setIsOpen(false);
        } else {
          console.log(result);
        }
      })
    }
  }

  return (
    <Modal 
      isModalOpen={props.isOpen}
      setIsModalOpen={(e : any) => {props.setIsOpen(e)}}
      haeder={props.header}
      size={props.size} 
      user={props.user}
      setTasks={props.setTasks}
      formID={"create-task-form"} 
      onCancelClick={onCancelClick}
    >
      <StyledCreateTaskModalContent>
        <form onSubmit={(e) => { handleSubmit(e) }} id="create-task-form">
          <div className="input-group task-name">
            <label>Task name</label>
            <input 
              required
              type="text"
              placeholder="Buy bananas" 
              onChange={(e) => {
                setTaskName((e.target.value))
              }}
            />
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea 
              onChange={
                (e) => {
                  setTaskDescription((e.target.value))
                }}
            />
          </div>
        </form>
      </StyledCreateTaskModalContent>
    </Modal>
  );
};

const StyledCreateTaskModalContent = styled.div`
  form {
    .input-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      label {
        margin-bottom: 1rem;
      }
      input,
      textarea {
        border: ${(props) => props.theme.borderWidth} solid
          ${(props) => props.theme.border};
        border-radius: 1rem;
        font-family: Noto;
      }
      input {
        padding: 1rem 2rem;
      }
      textarea {
        height: 10rem;
        padding: 2rem 2rem;
      }
      &.task-name {
        input {
          font-size: 3rem;
        }
      }
    }
  }
`;

export default CreateTaskModal;
