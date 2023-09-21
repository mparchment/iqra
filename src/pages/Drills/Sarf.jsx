import { useState, useEffect } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import styled from 'styled-components';
import { ArabicVerb } from './ArabicVerb'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    text-align: center;
`;

const CommonDiv = styled.div`
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #dddddd;
    min-height: 8.75rem;
`;

const Settings = styled.div`
    width: 85%;
    height: fit-content;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px solid #dddddd;
`;

const TopDiv = styled.div`
    border-radius-top: 5px;
    padding: 10px;
    padding-left: 15px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #dddddd;
    padding-right: 0;
`;

const QuestionContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    font-size: 3.5rem;
    padding-top: 15px;
    padding-bottom: 15px;

    gap: 15px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 15px;
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
        sigha: '',
        word: '',
        answer: ''
    });
    const [showAnswerState, setShowAnswerState] = useState(false);

    const showAnswer = () => {
        setShowAnswerState(true);
    };

    const nextQuestion = () => {
        const newQuestion = generateRandomQuestion();
        setCurrentQuestion(newQuestion);
        setShowAnswerState(false); // Hide the answer for the next question
    };

    useEffect(() => {
        const initialQuestion = generateRandomQuestion();
        setCurrentQuestion(initialQuestion);
    }, []);

    const generateRandomQuestion = () => {
        const wordBank = [
            ['ضرب', 'daraba'],
            ['فتح', 'fataha'],
            ['كرم', 'karuma'],
            ['سمع', 'sami3a'],
            ['حسب', 'hasiba'],
            ['فعل', 'fataha']
        ]

        const verbTenses = ['madin', 'mudari3'];
        const voices = ['ma3ruf', 'majhul'];
        const persons = ['mutakallim', 'hadir', 'ghaib'];
        const numbers = ['wahid', 'thaniya', 'jama3'];
        const genders = ['mudhakkar', 'mu3annath'];
    
        const verbTensesArabic = { 'madin': 'ماضٍ', 'mudari3': 'مضارع' };
        const voicesArabic = { 'ma3ruf': 'مَعْلُوم', 'majhul': 'مَجْهُول' };
        const personsArabic = { 'mutakallim': 'مُتَكَلِّم', 'hadir': 'حاضِر', 'ghaib': 'غائِب' };
        const numbersArabic = { 'wahid': 'واحِد', 'thaniya': 'ثنية', 'jama3': 'جَمْع' };
        const gendersArabic = { 'mudhakkar': 'مُذَكَّر', 'mu3annath': 'مُؤَنَّث' };
    
        const randomIndex = Math.floor(Math.random() * wordBank.length);
        const [randomWordArabic, randomWordTranslit] = wordBank[randomIndex];
    
        const randomVerbTense = verbTenses[Math.floor(Math.random() * verbTenses.length)];
        const randomVoice = voices[Math.floor(Math.random() * voices.length)];
        const randomPerson = persons[Math.floor(Math.random() * persons.length)];
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        const randomGender = genders[Math.floor(Math.random() * genders.length)];
    
        const testVerb = new ArabicVerb(randomWordArabic, randomWordTranslit);
        const answer = testVerb.placeHarakat("I", randomVerbTense, randomVoice, randomNumber, randomPerson, randomGender);
    
        const sighaArabic = `${voicesArabic[randomVoice]} ${verbTensesArabic[randomVerbTense]} ${numbersArabic[randomNumber]} ${personsArabic[randomPerson]} ${gendersArabic[randomGender]}`;
    
        return {
            sigha: sighaArabic,
            word: randomWordArabic,
            answer: answer
        };
    };

    return (
        <DashboardWrapper currentPage='review'>
            <Wrapper>
                <CommonDiv>
                    <TopDiv>Root</TopDiv>
                    <QuestionContent>
                        {currentQuestion.word}
                    </QuestionContent>
                </CommonDiv>
                <CommonDiv>
                    <TopDiv>Sigha</TopDiv>
                    <QuestionContent>
                        <QuestionSigha>{currentQuestion.sigha}</QuestionSigha>
                    </QuestionContent>
                </CommonDiv>
                <CommonDiv>
                    <TopDiv>Answer</TopDiv>
                    <QuestionContent>
                        {showAnswerState && currentQuestion.answer}
                    </QuestionContent>
                </CommonDiv>
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