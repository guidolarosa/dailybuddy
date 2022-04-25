import styled from 'styled-components'

const UnsignedMainView = (props : any) => {
    return (
        <StyledUnsignedMainView onClick={props.signIn}>
            <div className="sign-in-card">
                <p className="message">Log in to see your tasks.</p>
            </div>
        </StyledUnsignedMainView>
    )
};

const StyledUnsignedMainView = styled.section`
    width: calc(100vw / 12 * 5);
    margin: 0 auto;
    .sign-in-card {
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
        p {
            font-size: 4rem;
            font-weight: 600;
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoint_xl}) {
        width: calc(100vw / 12 * 7);
    }
    @media screen and (max-width: ${props => props.theme.breakpoint_m}) {
        width: calc(100vw / 12 * 11);
    }
`

export default UnsignedMainView;