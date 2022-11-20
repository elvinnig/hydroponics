import styled from 'styled-components';

const Button = styled.button`
    text-transform: uppercase;
    padding: 4px 8px;
    border: 1px solid;
    border-radius: 4px;
`;

const SuccessButton = styled(Button)`
    border-color: green;
    color: green;
`;

const DangerButton = styled(Button)`
    border-color: red;
    color: red;
`

export { SuccessButton, DangerButton };