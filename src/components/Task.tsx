import styled from "styled-components";
import {useEffect, useState} from 'react';

const Task = (props : any) => {
  const { task } = props;
  interface Priorities {
    1: string,
    2: string,
    3: string
  }

  const priorities : Priorities = {
    1: 'H',
    2: 'M',
    3: 'L'
  };

  const [isChecked, setIsChecked] = useState<boolean>(task.status);

  useEffect(() => {
    if (task.status === 'complete') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [task])

  return (
    <StyledTask className={`${isChecked ? 'completed' : ''}`}>
      <div className="checkbox-wrapper">
        <input name="completed" type="checkbox" value={isChecked as any} onChange={() => {
          setIsChecked(!isChecked);
        }}/>
      </div>
      {task.date && (
        <div className="date">
          {task.date.getHours()}:{task.date.getMinutes()}
        </div>
      )}
      <span className="task-name">
        {task.name}
      </span>
      {task.labels && (
        <div className="labels">
          {typeof task.labels == 'object' ?
            task.labels.map((label : string, i : number) => (
              <div key={i} className={`label label-${label}`}/>
            )) : (
              <div className={`label label-${task.labels}`}/>
            )
          }
        </div>
      )}
      {task.priority && (
        <div className="priorities">
          <div className={`priority priority-${priorities[task.priority as keyof Priorities] }`}>
            {priorities[task.priority as keyof Priorities]}
          </div>
        </div>
      )}
    </StyledTask>
  )
}

const StyledTask = styled.li`
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
  background: ${props => props.theme.backgroundLight};
  height: 7rem;
  border-bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  &.completed {
    background: ${props => props.theme.backgroundExtraDark};
  }
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  &:last-child {
    border-radius: 0 0 8px 8px;
    border-bottom: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
  }
  &:only-child {
    border-radius: 8px;
  }
  .checkbox-wrapper {
    margin-right: 1rem;
  }
  .date {
    height: 3rem;
    line-height: 3rem;
    color:  ${props => props.theme.invertedFont};
    font-size: 2rem;
    background: ${props => props.theme.black};
    border-radius: 4px;
    padding: 0 1rem;
    font-weight: 600;
    margin-right: 1rem;
    border: 1px solid ${props => props.theme.dateBorderColor};
  }
  .task-name {
    font-size: 2.5rem;
  }
  .labels {
    display: flex;
    margin-left: 2rem;
    .label {
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      border-radius: 2rem;
      &:last-child {
        margin-right: 0;
      }
      &.label-1 {
        background: ${props => props.theme.label1}
      }
      &.label-2 {
        background: ${props => props.theme.label2}
      }
      &.label-3 {
        background: ${props => props.theme.label3}
      }
      &.label-4 {
        background: ${props => props.theme.label4}
      }
    }
  }
  .priorities {
    margin-left: 1rem;
    .priority {
      border-radius: 0.5rem;
      width: 2rem;
      height: 2rem;
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
      text-align: center;
      line-height: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: ${props => props.theme.priorityFont};
      &.priority-H {
        background: ${props => props.theme.priorityH}
      }
      &.priority-M {
        background: ${props => props.theme.priorityM}
      }
      &.priority-L {
        background: ${props => props.theme.priorityL}
      }
    }
  }
`;

export default Task;