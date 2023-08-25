import DashboardWrapper from '../../components/DashboardWrapper';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Title = styled.div`
    text-align: center;
`;

const Question = styled.div`
    width: 85%;
    height: 100px;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #dddddd;
`;

const Answer = styled.div`
    width: 85%;
    height: 100px;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #dddddd;
`;

const Settings = styled.div`
    width: 85%;
    height: fit-content;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #dddddd;
`;

const TopDiv = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: #f5f5f5;
    padding: 10px;
    padding-left: 15px;
    border-bottom: 1px solid #dddddd;
    padding-right: 0;
`;

const QuestionContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 55%;
    font-size: 1.5rem;

    gap: 15px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
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

    background-color: var(--primary);
    color: white;
    border: 2px solid var(--primary);
    box-shadow: 0px 3px 0px var(--primary-shadow);

    &:active {
        transform: scale(0.98);
        box-shadow: 0px 1px 0px var(--primary-shadow);
    }
`;

const QuestionWord = styled.div`
`;

const QuestionSigha = styled.div`

`;

const QuestionArrow = styled.div`
    font-size: 2rem;
`

const SettingsContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    font-size: 1.5rem;

    gap: 15px;
`;

const SettingsDiv = styled.div`
    white-space: nowrap;
`;

const SettingsSubtitle = styled.h5`
    margin-bottom: 0;
`;

export default function Sarf() {
    return (
        <DashboardWrapper currentPage='review'>
            <Title><h1>Sarf</h1></Title>
            <Wrapper>
                <Question>
                    <TopDiv>Question</TopDiv>
                    <QuestionContent>
                        <QuestionSigha>مَعْلُوم ماضٍ جَمْع غَائِب مُدَّكَر</QuestionSigha>
                        <QuestionArrow>←</QuestionArrow>
                        <QuestionWord>نَصَرَ</QuestionWord>
                    </QuestionContent>
                </Question>
                <Answer><TopDiv>Answer</TopDiv>
                    <QuestionContent>نَصَرُوا</QuestionContent>
                </Answer>
                <Settings>
                    <TopDiv>Settings</TopDiv>
                    <SettingsContent>
                        <SettingsDiv>
                            <SettingsSubtitle>Verb Tense:</SettingsSubtitle>
                            <ul>
                                <li>ماضٍ</li>
                                <li>مضارع</li>
                            </ul>
                        </SettingsDiv>
                    </SettingsContent>
                </Settings>
                <Buttons>
                    <Button>Show Answer</Button>
                    <Button>Next Question</Button>
                </Buttons>
            </Wrapper>
        </DashboardWrapper>
    );
}
