import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import DashboardWrapper from '../components/DashboardWrapper';
import styled from 'styled-components';

const ModuleWrapper = styled.div`
    margin: 2rem 0;
`;

const ModuleTitle = styled.h2`
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
    position: relative;
    font-size: 1.5rem;
`;

const ChapterList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    position: relative;
`;

const ChapterItem = styled.li`
    margin: 0.5rem 2rem; // Increased the left margin to make room for the progression line
    position: relative;

    font-size: 1rem;
    padding-left: .75rem;

    &:before {
        content: "${props => (props.completed ? '✔' : '○')}";
        position: absolute;
        left: -.75rem; // Adjust the position to align with the progression line
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Modules = styled.div`
    display: flex;          // Turn this into a flex container
    flex-direction: column; // Stack children vertically
    align-items: center;    // Center children horizontally
`;

const ModuleTitleWrapper = styled.div`
    background: var(--primary);
    padding: 0.5rem 1rem;   // Optional padding for aesthetics
    width: 500px;
    border-radius: 0.5rem;  // Optional border radius for aesthetics
`;

const data = [
    {
        title: 'Module 1: Core Structures',
        chapters: [
            { id: 1, title: 'A Map of the Arabic Language' },
            { id: 2, title: 'Now in Arabic… Sentences' },
            { id: 3, title: 'Now in Arabic… Fragments' },
            { id: 4, title: 'Fragments Inside Sentences' },
            { id: 5, title: 'Actions: The Missing Element' },
            { id: 6, title: 'The Anomalies' },
            { id: 7, title: 'The Passive Voice' },
        ],
    },
    {
        title: 'Module 2: More on Actions',
        chapters: [
            { id: 8, title: 'Back-to-Back Actions' },
            { id: 9, title: 'Bald Actions' },
            { id: 10, title: 'Scenario 1: Shaving Words' },
            { id: 11, title: 'Scenario 2: Forbidding' },
            { id: 12, title: 'Scenario 3: Conditional Sentences' },
            { id: 13, title: 'Scenario 4: Commands' },
            { id: 14, title: 'Scenario 5: Command-Consequence' },
            { id: 15, title: 'Irregular Bald Actions' },
            { id: 16, title: 'Trimmed Actions' },
        ],
    },
    {
        title: 'Module 3: Add-ons',
        chapters: [
            { id: 17, title: 'Emphasis' },
            { id: 18, title: 'The واو' },
            { id: 19, title: 'Templates' },
        ],
    },
    {
        title: 'Module 4: Word Patterns',
        chapters: [
            { id: 20, title: 'The Agent' },
            { id: 21, title: 'The Target' },
            { id: 22, title: 'Comparatives' },
            { id: 23, title: 'Ideas' },
        ],
    },
    {
        title: 'Module 5: Complex Structures',
        chapters: [
            { id: 24, title: 'Complex Nouns' },
            { id: 25, title: 'Complex Descriptors' },
            { id: 26, title: 'The Emphasizer مِنْ' },
        ],
    },
];

const completedChapters = [1, 2, 3]; // Example of chapters that are completed

export default function Dashboard() {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleListeningClick = () => {
        navigate('/listening');
    };

    return (
        <DashboardWrapper currentPage='learn'>
            <Modules>
                {data.map((module, index) => (
                    <ModuleWrapper key={index}>
                        <ModuleTitleWrapper><ModuleTitle>{module.title}</ModuleTitle></ModuleTitleWrapper>
                        <ChapterList>
                            {module.chapters.map((chapter) => (
                                <ChapterItem 
                                    key={chapter.id} 
                                    completed={completedChapters.includes(chapter.id)}
                                >
                                    <strong>Chapter {String(chapter.id).padStart(2, '0')}:</strong> {chapter.title}
                                </ChapterItem>
                            ))}
                        </ChapterList>
                    </ModuleWrapper>
                ))}
            </Modules>
        </DashboardWrapper>
    );
}
