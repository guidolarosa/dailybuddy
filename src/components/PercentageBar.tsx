import styled from "styled-components";

const PercentageBar = (props : any) => {
    return (
        <StyledPercentageBar percentage={props.percentage}>
            <div>
                {props.percentage > 0 && (
                    <span>{props.percentage}%</span>
                )}
            </div>
        </StyledPercentageBar>
    )
}

interface PercentageBarProps {
    percentage: number
}

const StyledPercentageBar = styled.div<PercentageBarProps>`
    margin: 2rem 0;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
    border-radius: 1rem;
    height: 7rem;
    overflow: hidden;
    position: relative;
    background: ${props => props.theme.background};
    div {
        background: ${props => props.theme.backgroundDark};
        width: ${props => props.percentage}%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        border-right: ${props => props.theme.borderWidth} solid ${props => props.theme.border};
        font-weight: 600;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }
`;

export default PercentageBar;