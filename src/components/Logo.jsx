import styled from 'styled-components';

const LogoWrapper = styled.div`
    text-align: center;
    color: var(--primary);
`;

const LogoText = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    user-select: none;
    margin: 0;
`;

export default function Logo() {
    return (
        <LogoWrapper>
            <LogoText>Iqra</LogoText>
        </LogoWrapper>
    );
}
