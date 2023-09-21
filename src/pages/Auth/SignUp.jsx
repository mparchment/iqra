import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AppleLogo from '../../assets/apple-logo.png';
import GoogleLogo from '../../assets/google-logo.png';
import BackIcon from '../../assets/back-icon.png';
import { auth, provider } from '../../firebase-config'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    max-width: 414px; // Remove later when desktop version is implemented.
    margin: 0 auto; // Remove later when desktop version is implemented.
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: .5rem;
    margin-bottom: 1rem;
    gap: 1rem;
`;

const TextContainer = styled.div`
    width: 80%;
    text-align: left;
    font-weight: 800;
    color: rgb(75,75,75);
`;

const FormContainer = styled.div`
    width: 80%;
`;

const Button = styled.button`
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 12px 50px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 800;
    font-family: inherit;

    &:active {
        transform: scale(0.98);
    }
`;

const SignUpButton = styled(Button)`
    background-color: var(--primary);
    color: white;
    border: 2px solid var(--primary);
    box-shadow: 0px 3px 0px var(--primary-shadow);

    &:active {
        box-shadow: 0px 1px 0px var(--primary-shadow);
    }
`;

const Input = styled.input`
    border: 2px solid lightgray;
    border-radius: 10px;
    font-size: 15px;
    padding: 12px 0 12px 16px;
    width: 90%;
    font-family: inherit;
    margin-bottom: 1rem;
`;

const Divider = styled.hr`
    width: 80%;
    border: 1px solid lightgray;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const OAuthButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    gap: 1rem;
`;

const OAuthButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    border: 2px solid lightgray;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.2);
    color: rgb(75,75,75);
    white-space: nowrap;
    width: 95%;
    padding-left: 20px;
`;

const LogoWrapper = styled.img`
    width: 20px;
    margin-right: 30px;
`;

const FormError = styled.span`
    color: red;
    font-size: 14px;
    margin-bottom: .7rem;
    margin-top: .33rem;
`;

const SignInLink = styled.a`
    color: var(--primary);
    font-weight: 800;
    cursor: pointer;
`;

const Icon = styled.img`
    height: 20px;
    cursor: pointer;
`;

const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleBackClick = () => {
        navigate('/iqra/');
    };

    const handleSignInClick = () => {
        navigate('/iqra/sign-in');
    };

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigate('/iqra/dashboard');
        } catch (error) {
            console.log(error.code, error.message);
        }
    };

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate('/iqra/dashboard');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    return (
        <Wrapper>
            {/*<IconContainer><Icon src={BackIcon} onClick={handleBackClick}/></IconContainer>*/}
            <TextContainer>
                <h1>Welcome!</h1>
                <h3>Please, create an account.</h3>
            </TextContainer>

            <OAuthButtons>
                <OAuthButton onClick={handleGoogleSignUp}><LogoWrapper src={GoogleLogo}/>Sign up with Google</OAuthButton>
                {/*<OAuthButton><LogoWrapper src={AppleLogo}/>Sign up with Apple</OAuthButton>*/}
            </OAuthButtons>

            <Divider/>

            <FormContainer>
                <Form onSubmit={handleCreateAccount}>
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {!passwordsMatch && <FormError>Passwords do not match.</FormError>}
                    <SignUpButton type="submit">Sign Up</SignUpButton>
                </Form>
            </FormContainer>
            <Buttons>
                <SignInLink>Already have an account? <SignInLink onClick={handleSignInClick}>Sign in</SignInLink>.</SignInLink>
            </Buttons>
        </Wrapper>
    )
};

export default SignUp;