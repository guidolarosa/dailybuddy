import { useState } from 'react';
import styled from "styled-components";
import Dropdown from './Dropdown';

const Schedule = (props: any) => {

  const [startingHour, setStartingHour] = useState(9);
  const [finishingHour, setFinishingHour] = useState(23);

  let hours = Array.from(Array(24 - startingHour - (24 - finishingHour)).keys());
  let mappedHours: any[] = hours.map((hour) => [
    [hour + startingHour, 0],
    [hour + startingHour, 30],
  ]);

  const today = new Date();
  const weekday = today.toLocaleString("default", { weekday: "long" });
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.getDate();

  return (
    <StyledSchedule>
      <div className="date-navigator">
        <button className="previous">
          <div className="icon">▲</div>
        </button>
        <div className="date">
          {weekday}, {month} {day}
        </div>
        <button className="next">
          <div className="icon">▲</div>
        </button>
      </div>
      <ul>
        {mappedHours.map((hour, index) => {
          const format = (time: number) => {
            let timeString = time.toString();
            if (timeString === "0") {
              return "00";
            } else if (timeString.length === 1) {
              return "0" + timeString;
            } else {
              return time.toString();
            }
          };

          let fullHour_Hour = format(hour[0][0]);
          let fullHour_Minutes = format(hour[0][1]);
          let halfHour_Hour = format(hour[1][0]);
          let halfHour_Minutes = format(hour[1][1]);

          return (
            <li className="hour-block" key={index}>
              <div className="half-hour-block">
                <span className="time">
                  {fullHour_Hour}:{fullHour_Minutes}
                </span>
              </div>
              <div className="half-hour-block">
                <span className="time">
                  {halfHour_Hour}:{halfHour_Minutes}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledSchedule>
  );
};

const StyledSchedule = styled.section`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .date-navigator {
    background: ${props => props.theme.dateNavigationBackground};
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};;
      width: 4rem;
      height: 4rem;
      outline: none;
      background-color: ${props => props.theme.backgroundExtraDark};
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.backgroundDark};
      }
      &:active {
        background-color: ${props => props.theme.backgroundExtraDark};
        transition-duration: 0s;
      }
      .icon {
        font-size: 2rem;
        color: ${props => props.theme.dateNavigationArrows};
      }
      &.previous {
        border-left: 0;
        .icon {
          transform: rotate(-90deg);
        }
      }
      &.next {
        border-right: 0;
        .icon {
          transform: rotate(90deg);
        }
      }
    }
    .date {
      font-weight: 400;
      color: ${props => props.theme.invertedFont};
      font-size: 2rem;
      letter-spacing: 0.1rem;
    }
  }
  ul {
    background-color: ${props => props.theme.backgroundLight};
    height: 100%;
    overflow-y: scroll;
    .hour-block {
      border-bottom: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
      height: 14rem;
      .half-hour-block {
        display: flex;
        align-items: center;
        height: 7rem;
        border-bottom: ${props => props.theme.borderWidth} dashed ${props => props.theme.border};
        &:last-child {
          border-bottom: 0;
        }
        .time {
          padding-left: 1rem;
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
  }
`;
  
export default Schedule;
