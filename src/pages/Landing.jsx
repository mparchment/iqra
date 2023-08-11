import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0.1;
`;

const MainText = styled.div`
    flex-grow: 1;
    width: 80%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-text);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    font-family: inherit;
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 12px 50px;
    border-radius: 10px;
    cursor: pointer;

    &:active {
        transform: scale(0.98);
    }
`;

const RegisterButton = styled(Button)`
    background-color: var(--primary);
    color: white;
    border: 2px solid var(--primary);
    box-shadow: 0px 3px 0px var(--primary-shadow);

    &:active {
        box-shadow: 0px 1px 0px var(--primary-shadow);
    }
`;

const LoginButton = styled(Button)`
    background-color: transparent;
    color: var(--primary);
    border: 2px solid lightgray;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);

    &:active {
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 0.05;
`;

export default function Landing() {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/sign-up');
    };

    const handleLoginClick = () => {
        navigate('/sign-in');
    };

    return (
        <Wrapper>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <MainText>The free, fun, and effective way to learn Arabic!</MainText>
            <Buttons>
                <RegisterButton onClick={handleRegisterClick}>Get started</RegisterButton>
                <LoginButton onClick={handleLoginClick}>I already have an account</LoginButton>
            </Buttons>
        </Wrapper>
    )
}
