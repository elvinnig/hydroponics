// Imports

import styled from 'styled-components';
import logo from '../assets/project6logo.png'

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
        color: green;
    }
    h5 {
        color: yellowgreen;
    }
`;

const LandingPage = ({ setShowLandingPageProps }) => {
  return (
    <LandingPageContainer>
        
            <img width="25%" src={logo} alt="logo" />
        
        <h1>
            Welcome to <strong>Hydro-Culture!</strong>
        </h1>

        <h5>
            | Hydroponics Management System |
        </h5>
        <SuccessButton
            onClick={ setShowLandingPageProps }
        >
            Enter
        </SuccessButton>
    </LandingPageContainer>
  )
}

export default LandingPage