import styled from "styled-components";

export const thankYouContainer = styled.div `
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        margin-block: 2.75rem;
    }
`;

export const thankYouIcon = styled.svg `
    width: calc(2.972rem + 2.254vw);
    height: auto;
`;

export const thankYouTitle = styled.h1 `
    font-size: calc(1.324rem + 0.751vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};

    margin-block-start: calc(1.53rem + 0.939vw);
`;

export const thankYouText = styled.p `
    font-size: 1rem;
    font-weight: 400;

    color: ${props => props.theme.colors.neutral.coolGray};

    margin-block-start: calc(0.868rem + 0.563vw);
`;