import styled, { keyframes } from "styled-components";

export const ContainerSending = styled.div `
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    row-gap: calc(1.73rem + 0.3vw);
`;

export const spinner = keyframes`
    to{
        transform: rotateZ(0deg);
    }
    from{
        transform: rotateZ(-360deg);
    }
`;

export const SendingSpinner = styled.svg `
    width: calc(3.296rem + 3.005vw);
    height: auto;

    animation: ${spinner} 2s linear infinite;

    & path{
        fill: ${props => props.theme.colors.primary.purplishBlue};
    }
`;

export const SendingText = styled.div `
    font-size: calc(1.48rem + 0.3vw);

    color: ${props => props.theme.colors.neutral.coolGray};
`;