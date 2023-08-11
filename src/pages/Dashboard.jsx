import Logo from '../components/Logo';
import SignOutButton from '../components/SignOut';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    gap: 3rem;
    padding-top: 1rem;
`;

export default function Dashboard() {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleListeningClick = () => {
        navigate('/listening');
    };

    return (
        <Wrapper>
            <Logo/>
            {user && <>Welcome to your dashboard, {user.email}</>}
            <button onClick={handleListeningClick}>Listening</button>
            <SignOutButton/>
        </Wrapper>
    );
}
