import DashboardWrapper from "../components/DashboardWrapper";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Subpage = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

export default function Review() {
    return (
        <DashboardWrapper currentPage='review'>
            <Subpage>
                <Link to='/iqra/sarf'>Sarf</Link>
                <Link to='/iqra/dashboard'>Dashboard</Link>
            </Subpage>
        </DashboardWrapper>
    )
}