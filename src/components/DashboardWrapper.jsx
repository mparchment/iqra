// Layout.js
import styled from 'styled-components';
import Logo from '../components/Logo';
import PropTypes from 'prop-types';
import SignOutButton from '../components/SignOutButton';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
`;

const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-wrap: wrap; /* This allows items to wrap on smaller screens */

    @media (max-width: 768px) {
        gap: 2rem;
    }
`;

const NavbarItem = styled.div`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 900;
    color: ${props => props.isActive ? 'rgb(75, 75, 75)' : 'rgb(75, 75, 75, .5)'};
    padding: 0 1rem;
    cursor: pointer;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid rgb(75, 75, 75, .2);
    justify-content: space-between;
    padding-bottom: 1rem;
    padding-top: 1rem;
`;

const LogoWrapper = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Content = styled.div`
    flex: 1;
    width: 100%;
    text-align: left;
`;

export default function DashboardWrapper({ currentPage, children }) {
    const navigate = useNavigate();

    const handleLearnClick = () => {
        navigate('/dashboard')
    }

    console.log(currentPage)

    return (
        <Wrapper>
            <Header>
                <LogoWrapper onClick={handleLearnClick}>
                    <Logo />
                </LogoWrapper>
                <Navbar>
                    <NavbarItem onClick={handleLearnClick} isActive={currentPage === 'learn'}>Learn</NavbarItem>
                    <NavbarItem isActive={currentPage === 'stories'}>Stories</NavbarItem>
                    <NavbarItem isActive={currentPage === 'discuss'}>Discuss</NavbarItem>
                    <NavbarItem isActive={currentPage === 'shop'}>Shop</NavbarItem>
                    <NavbarItem isActive={currentPage === 'more'}>More</NavbarItem>
                </Navbar>
                <LogoWrapper>
                    <SignOutButton/>
                </LogoWrapper>
            </Header>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

DashboardWrapper.propTypes = {
    currentPage: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};