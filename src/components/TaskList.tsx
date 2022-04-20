import styled from "styled-components";
import db from '../utils/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';

import Modal from './Modal';

import TaskType from './../types/Task'

import TaskItem from './Task';

const TaskList = (props : any) => {

  const [tasks, setTasks] = useState<any[]>([]);
  const [isListLoaded, setIsListLoaded] = useState(false);
  const [forceEmptyList, setForceEmptyList] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  class Task {
    [x: string]: any;
    constructor(Task : TaskType) {
      this.type = Task.type;
      this.id = Task.id;
      this.creationDate = Task.creationDate;
      this.name = Task.name;
      this.date = Task.date;
      this.priority = Task.priority || 2;
      this.reward = Task.reward || 0;
      this.status = Task.status || 'incomplete';
      this.labels = Task.labels;
      this.tags = Task.tags || [];
    }
  }

  useEffect(() => {
    if (forceEmptyList) {
      setTasks([]);
    } else {
      getTasks();
    }
  }, [])

  async function getTasks() {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    let tasks : any = []
    querySnapshot.forEach((doc) => {
      let retrievedTask = doc.data();
      let taskOptions : TaskType = {
        date: new Date('December 17, 1995 15:30:00'),
        type: retrievedTask.type,
        id: doc.id,
        name: retrievedTask.name,
        creationDate: retrievedTask.creationDate.seconds,
        priority: retrievedTask.priority,
        reward: retrievedTask.reward,
        status: retrievedTask.status,
        labels: retrievedTask.labels
      };
      let task = new Task(taskOptions);
      tasks.push(task);
    })
    setTasks(tasks);
    setIsListLoaded(true)
  }

  return (
    <StyledTaskList className="task-list">
      <div className="task-list-header">
        <h2>My Tasks</h2>
        <button onClick={() => {setShowTaskModal(true)}} className="create-task">+ Create Task</button>
        {showTaskModal && (
          <Modal header={'Create a task'} onCloseClick={() => {setShowTaskModal(false)}} />
        )}
      </div>
      {isListLoaded ? (
        tasks.length > 0 ? (
          <ul>
            {tasks.map((task, i) => (
              <TaskItem task={task} key={task.id} />
            ))}
          </ul>
        ) : (
          <span className="list-empty">
            Your list is empty! Go ahead and add some tasks
          </span>
        )
      ) : (
        <span className="loading">
          Loading...
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
      height: 4rem;
      border: 0;
      outline: 0;
      font-size: 2rem;
      border-radius: 0.5rem;
      padding: 0 2rem;
      font-family: Noto;
      cursor: pointer;
    }
  }
  .loading,
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
`;

export default TaskList;