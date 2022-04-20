import styled from "styled-components";
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';


const Sidebar = (props: any) => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [startingHour, setStaringHour] = useState(9);
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

  const sidebarMenu : {label: string}[] = [
    {
      label: 'Schedule'
    },
    {
      label: 'Dashboard'
    },
    {
      label: 'Notes'
    },
  ];

  return (
    <StyledSidebar className={`sidebar ${!props.isSidebarVisible ? 'sidebar-hidden' : ''}`} onClick={() => {
      if (!props.isSidebarVisible) {
        props.setIsSidebarVisible(true);
      }
    }}>
      {props.isSidebarVisible && (
        <section className="schedule">
          <section className="sidebar-header">
            <div className="sidebar-header-top">
              <h2>Schedule</h2>
              <Dropdown 
                options={sidebarMenu} 
                onTargetClick={() => {
                  setIsSidebarMenuOpen(!isSidebarMenuOpen)}}
                onOutClick={() => {
                  setIsSidebarMenuOpen(false);
                }}
              >
                <div className={`sidebar-menu-toggle ${isSidebarMenuOpen ? 'toggle-active' : ''}`}>
                  <div/><div/><div/><div/>
                </div>
              </Dropdown>
            </div>
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
          </section>
          <section className="sidebar-body">
            <ul>
              {mappedHours.map((hour, index) => {
                const format = (time: number) => {
                  let timeString = time.toString();
                  if (timeString == "0") {
                    return "00";
                  } else if (timeString.length == 1) {
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
          </section>
        </section>
      )}
      <div className="sidebar-hide-toggler" onClick={() => {props.setIsSidebarVisible(!props.isSidebarVisible)}}>
        <div className="icon">▲</div>
      </div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.section`
  grid-area: sidebar;
  border-left: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
  background-color: ${props => props.theme.backgroundDark};
  max-width: 100vh;
  position: relative; 
  &.sidebar-hidden {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.backgroundExtraDark};
      max-width: 100vh;
    }
    .sidebar-hide-toggler {
      position: static;
      border: 0;
      background: none;
      .icon {
        transform: rotate(-90deg) translateY(-0.5rem);
        font-size: 3rem;
      }
    }
  }
  .sidebar-header {
    padding: 3rem;
    h2 {
      font-size: 5rem;
    }
  }
  .schedule {
    height: 100%;
    overflow: hidden;
    .sidebar-header {
      padding: 0;
      .sidebar-header-top {
        padding: 4rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: none !important;
        .sidebar-menu-toggle {
          width: 3rem;
          height: 3rem;
          /* border: 1px solid black; */
          position: relative;
          top: 0.5rem;
          cursor: pointer;
          &:before {
            content: '';
            position: absolute;
            width: 5rem;
            height: 5rem;
            top: -1.2rem;
            left: -1rem;
            background: ${props => props.theme.backgroundExtraDark};
            border-radius: 0.5rem;
            opacity: 0;
            transition: 0.15s ease-in-out all;
          }
          &:hover {
            &:before {
              opacity: 1;
            }
          }
          div {
            height: 0.2rem;
            width: 3rem;
            background:  ${props => props.theme.font};
            position: absolute;
            top: 0;
            transition: 0.25s ease-in-out all;
            &:nth-child(2),
            &:nth-child(3) {
              top: 1rem;
            }
            &:nth-child(4) {
              top: 2rem;
            }
          }
          &.toggle-active {
            div {
              &:nth-child(4),
              &:first-child {
                opacity: 0;
              }
              &:nth-child(2) {
                transform: rotate(45deg);
              }
              &:nth-child(3) {
                transform: rotate(-45deg);
              }
            }
          }
        }
      }
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
    }
    .sidebar-body {
      overflow-y: scroll;
      height: calc(100vh - 27rem);
      ul {
        background-color: ${props => props.theme.backgroundLight};
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
    }
  }
  .sidebar-hide-toggler {
    position: absolute;
    bottom: 1rem;
    left: -6rem;
    width: 4rem;
    height: 4rem;
    background: ${props => props.theme.backgroundDark};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    cursor: pointer;
    .icon {
      font-size: 3rem;
      line-height: 6rem;
      transform: rotate(90deg) translateY(-0.5rem);
    }
  }
`;

export default Sidebar;
