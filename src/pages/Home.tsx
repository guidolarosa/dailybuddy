import styled from 'styled-components'
import Header from './../components/Header'
import snapshot from './../img/snapshot.png'

const Home = (props : any) => {
    const {
        setIsUserSignedIn,
        handleLoginClick,
        isUserSignedIn
    } = props;

    return (
        <StyledHome>
            <Header 
                isUserSignedIn={isUserSignedIn}
                setIsUserSignedIn={setIsUserSignedIn}
                signIn={handleLoginClick}
            />
            <main>
                <section className="hero">
                    <h1>Keep your day organized<br/>with DailyBuddy</h1>
                    <p>
                        Keep track of your task in a simple and focused way.
                    </p>
                    <button onClick={handleLoginClick}>Log in</button>
                    <section className="hero-graphic">
                        <img src={snapshot} />
                    </section>
                </section>
            </main>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 10rem calc((100vh - 10rem));
    grid-template-areas: 
        "header"
        "main";
    color: ${props => props.theme.font};
    transition: 0.25s ease-in-out all;
    main {
        grid-area: main;
        background-color: ${props => props.theme.background};
        overflow-y: scroll;
        height: calc(100vh - 10rem);
        .hero {
            width: calc((100vw / 12) * 10);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            position: relative;
            h1 {
                font-size: 7rem;
                line-height: 10rem;
                margin-bottom: 3rem;
            }
            p {
                font-size: 3rem;
                margin-bottom: 3rem;
            }
            button {
                width: fit-content;
                margin-top: 2rem;
                background: ${props => props.theme.black};
                color: ${props => props.theme.invertedFont};
                border: 0;
                height: 7rem;
                font-size: 3rem;
                padding: 0 4rem;
                border-radius: 1rem;
            }
            .hero-graphic {
                position: absolute;
                top: 32rem;
                right: -25rem;
                img {
                    height: 40rem;
                }
            }
        }
    }
`

export default Home