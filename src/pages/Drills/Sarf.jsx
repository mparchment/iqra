import { useState, useEffect } from 'react';
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

    // State for the current question and answer
    const [currentQuestion, setCurrentQuestion] = useState({
        sigha: 'مَعْلُوم ماضٍ جَمْع غَائِب مُدَّكَر',
        word: 'نَصَرَ',
        answer: 'نَصَرُوا'
    });
    const [showAnswerState, setShowAnswerState] = useState(false);


    // State for settings
    const [settings, setSettings] = useState({
        verbTense: 'ماضٍ', // Past tense by default
        questionType: 'Details to Conjugation' // Default question type
    });

    // Function to show the answer
    const showAnswer = () => {
        setShowAnswerState(true);
    };


    const nextQuestion = () => {
        const newQuestion = generateRandomQuestion();
        setCurrentQuestion(newQuestion);
        setShowAnswerState(false); // Hide the answer for the next question
    };

    // Initialize the first question when the component mounts
    useEffect(() => {
        const initialQuestion = generateRandomQuestion();
        setCurrentQuestion(initialQuestion);
    }, []);


    // Function to update settings
    const updateSettings = (key, value) => {
        setSettings({
            ...settings,
            [key]: value
        });
    };

    const removeAlifLaamAndHarakat = (text) => {
        return text.replace(/الْ|ُ|َ|ِ|ْ/g, '');
    };

    const generateRandomQuestion = () => {
        const verbTenses = ['الْمَاضِي', 'الْمُضَارِع'];
        const persons = ['الْمُتَكَلِّم', 'الْمُخَاطَب', 'الْغَائِب'];
        const numbers = ['الْمُفْرَد', 'الْمُثَنَّى', 'الْجَمْع'];
        const genders = ['مذكر', 'مؤنث'];
      
        const randomVerbTense = verbTenses[Math.floor(Math.random() * verbTenses.length)];
        const randomPerson = persons[Math.floor(Math.random() * persons.length)];
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        const randomGender = genders[Math.floor(Math.random() * genders.length)];
      
        // Map the gender back to 'm' or 'f' for lookup in the conjugations object
        const genderKey = randomGender === 'مذكر' ? 'm' : 'f';
      
        const answer = conjugations[randomVerbTense][randomPerson][randomNumber][genderKey];
      
        return {
            sigha: `${removeAlifLaamAndHarakat(randomVerbTense)} ${removeAlifLaamAndHarakat(randomNumber)} ${removeAlifLaamAndHarakat(randomPerson)} ${removeAlifLaamAndHarakat(randomGender)}`,
            word: 'نَصَرَ', // This would be a random verb root
            answer: answer // This would be the correct conjugation
        };
    };

    
      

    const getConjugation = (verbTense, person, number, gender) => {
        return conjugations[verbTense][person][number][gender];
    };

    return (
        <DashboardWrapper currentPage='review'>
            <Title><h1>Sarf</h1></Title>
            <Wrapper>
                <Question>
                    <TopDiv>Question</TopDiv>
                    <QuestionContent>
                        <QuestionSigha>{currentQuestion.sigha}</QuestionSigha>
                        <QuestionArrow>←</QuestionArrow>
                        <QuestionWord>{currentQuestion.word}</QuestionWord>
                    </QuestionContent>
                </Question>
                <Answer>
                    <TopDiv>Answer</TopDiv>
                    <QuestionContent>
                        {showAnswerState && currentQuestion.answer}
                    </QuestionContent>
                </Answer>
                {/*<Settings>
                    <TopDiv>Settings</TopDiv>
                    <SettingsContent>
                        <SettingsDiv>
                            <SettingsSubtitle>Verb Tense:</SettingsSubtitle>
                            <ul>
                                <li onClick={() => updateSettings('verbTense', 'Past tense')}>Past tense</li>
                                <li onClick={() => updateSettings('verbTense', 'Present/Future Tense')}>Present/Future Tense</li>
                                <li onClick={() => updateSettings('verbTense', 'Both')}>Both</li>
                            </ul>
                        </SettingsDiv>
                        <SettingsDiv>
                            <SettingsSubtitle>Question Type:</SettingsSubtitle>
                            <ul>
                                <li onClick={() => updateSettings('questionType', 'Details to Conjugation')}>Details to Conjugation</li>
                                <li onClick={() => updateSettings('questionType', 'Conjugation to Details')}>Conjugation to Details</li>
                                <li onClick={() => updateSettings('questionType', 'Past to Present/Future')}>Past to Present/Future</li>
                                <li onClick={() => updateSettings('questionType', 'Present/Future to Past')}>Present/Future to Past</li>
                            </ul>
                        </SettingsDiv>
                    </SettingsContent>
                </Settings>*/}
                <Buttons>
                    <Button onClick={showAnswer}>Show Answer</Button>
                    <Button onClick={nextQuestion}>Next Question</Button>
                </Buttons>
            </Wrapper>
        </DashboardWrapper>
    );
}