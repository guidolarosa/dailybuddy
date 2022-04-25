import styled from "styled-components";
import { useEffect, useState } from 'react';

import TaskItem from './Task';
import PercentageBar from "./PercentageBar";
import CreateTaskModal from "./CreateTaskModal"

const TaskList = (props : any) => {

  const [isListLoaded, setIsListLoaded] = useState(false);
  const [forceEmptyList, setForceEmptyList] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(50);
  const [completedTasks, setCompletedTasks] = useState({});

  const {
    setTasks,
    tasks,
    user
  } = props;

  useEffect(() => {
    if (forceEmptyList) {
      setTasks([]);
    }
  }, [])

  useEffect(() => {
    console.log(tasks)
    if (tasks.length > 0) {
      setIsListLoaded(true)
    }
  }, [tasks])

  return (
    <StyledTaskList className="task-list">
      <div className="task-list-header">
        <h2>My Tasks</h2>
        <button onClick={() => {setShowTaskModal(true)}} className="create-task">+ Create Task</button>
        {showTaskModal && (
          <CreateTaskModal 
            isOpen={showTaskModal} 
            setIsOpen={(e : any) => {setShowTaskModal(e)}}
            header={'Create a task'} 
            size={'large'} 
            userUID={user.uid}
            setTasks={setTasks}
            onCloseClick={() => {
              setShowTaskModal(false)
            }} 
          />
        )}
      </div>
      <PercentageBar percentage={completionPercentage}/>
      {tasks.length > 0 ? (
          <ul>
            {tasks.map((task : any, i : number) => (
              <TaskItem task={task} key={task.id} />
            ))}
          </ul>
        ) : (
        <span className="list-empty">
          Your list is empty! Go ahead and add some tasks
        </span>
      )} 
    </StyledTaskList>
  )
}

const StyledTaskList = styled.section`
  width: calc(100vw / 12 * 5);
  margin: 0 auto;
  .task-list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 6rem;
      line-height: 7rem;
      margin-bottom: 2rem;
    }
    .create-task {
      color: ${props => props.theme.invertedFont};
      background-color: ${props => props.theme.black};
      height: 5rem;
      border: 0;
      outline: 0;
      font-size: 2rem;
      border-radius: 0.5rem;
      padding: 0 2rem;
      font-family: Noto;
      cursor: pointer;
    }
  }
  .list-empty {
    font-size: 3rem;
    text-align: center;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    background: ${props => props.theme.backgroundExtraDark};
    width: 100%;
    margin-top: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14rem;
  }
  ul {
    margin-bottom: auto;
  }
  @media screen and (max-width: ${props => props.theme.breakpoint_xl}) {
    width: calc(100vw / 12 * 7);
  }
  @media screen and (max-width: ${props => props.theme.breakpoint_m}) {
    width: calc(100vw / 12 * 11);
  }
`;

export default TaskList;