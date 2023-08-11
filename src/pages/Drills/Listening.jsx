import { useState, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Instruction = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    margin: 1rem;
    text-align: center;
`;

const ImageWrapper = styled.div`
    height: 12.5rem;
    width: 12.5rem;
    background: #EDF0F5;
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 5%;
`;

const SentenceWrapper = styled.div`
    font-family: 'Noto Sans Arabic', sans-serif;
    font-size: 1.5rem;
    direction: rtl;
    display: flex;
    align-items: center;
`;

const QuestionFill = (props) => {
    const { answerSelected, answerText } = props;

    const styles = useMemo(() => {
        if (answerSelected) {
            return `
                text-decoration: underline;
                text-decoration-thickness: 2.5px;
                text-underline-offset: 10px;
                margin-left: .33rem;
            `;
        } else {
            return `
                font-family: 'Noto Sans Arabic', sans-serif;
                background-color: #EDF0F5;
                color: transparent;
                display: inline-block;
                margin-left: .33rem;
                border-radius: 6px;
                width: 75px;
                height: 35px;
                user-select: none;
            `;
        }
    }, [answerSelected]);

    const AnswerSpan = styled.span`
        ${styles}
    `;

    return <AnswerSpan>{answerText}</AnswerSpan>;
};

QuestionFill.propTypes = {
    answerSelected: PropTypes.bool.isRequired,
    answerText: PropTypes.string.isRequired,
};

const TranslationWrapper = styled.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
`;

const AvailableOptionsWrapper = styled.div`
    display: flex;
    gap: .33rem;
    margin-top: 1rem;
`;

const WordOption = styled.button`
    background: #EDF0F5;
    font-family: 'Noto Sans Arabic', sans-serif;
    font-size: 1.1rem;
    border-radius: 6px;
    font-weight: 600;
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;

    &:active {
        scale: 0.95;
    }

    &:hover {
        background: gold;
        cursor: pointer;
    }
`;

export default function Listening() {
    const [answerSelected, setAnswerSelected] = useState(false);

    const handleAnswerSelected = () => {
        setAnswerSelected(true);
        console.log(answerSelected);
    };

    return (
        <Wrapper>
            <Instruction>Listen to the sentence and select the word:</Instruction>
            <ImageWrapper></ImageWrapper>
            <SentenceWrapper>
                <QuestionFill answerSelected={answerSelected} answerText="أدرس" />اللغة العربية
            </SentenceWrapper>
            <TranslationWrapper>I am studying Arabic.</TranslationWrapper>
            {!answerSelected && (
                <AvailableOptionsWrapper>
                    <WordOption onClick={handleAnswerSelected}>أدرس</WordOption>
                </AvailableOptionsWrapper>
            )}
        </Wrapper>
    );
}