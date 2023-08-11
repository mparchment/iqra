import { auth } from '../firebase-config';  
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 12px 50px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    font-family: inherit;

    background-color: #fc1303;
    color: white;
    border: 2px solid #fc1303;
    box-shadow: 0px 3px 0px #850d04;

    &:active {
        transform: scale(0.98);
        box-shadow: 0px 1px 0px #850d04;
    }
`;

const SignOutButton = () => {

    const navigate = useNavigate();
  
    const handleSignOut = async () => {
        try {
            await auth.signOut();
                navigate ('/');
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <Button onClick={handleSignOut}>
            Sign Out
        </Button>
    );
};

export default SignOutButton;
