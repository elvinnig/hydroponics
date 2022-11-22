// Imports

import styled from 'styled-components';

import { SuccessButton } from '../components/styled/Button.styled';

const LandingPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
    }
`;

const LandingPage = ({ setShowLandingPageProps }) => {
  return (
    <LandingPageContainer>
        <h1>
            Welcome!
        </h1>
        <SuccessButton
            onClick={ setShowLandingPageProps }
        >
            Enter
        </SuccessButton>
    </LandingPageContainer>
  )
}

export default LandingPage