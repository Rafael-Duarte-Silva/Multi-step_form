import styled from "styled-components";

export const addOnsList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: calc(0.662rem + 0.376vw);

    margin-block-start: calc(1.442rem + 1.315vw);
`;

export const addOnsIntem = styled.li`
    flex: 0 0 calc(3.354rem + 1.69vw);
`;

export const addOnsLabel = styled.label`
    cursor: pointer;

    height: 100%;

    display: flex;
    align-items: center;

    box-sizing: border-box;
    padding: 1rem calc(0.868rem + 0.563vw);

    border-radius: 0.625rem;
    border: 0.0625rem solid ${props => props.theme.colors.neutral.coolGray};
`;

export const addOnsContainerCheckmark = styled.div`
    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.3125rem;
    outline: 0.0625rem solid ${props => props.theme.colors.neutral.coolGray};
`;

export const addOnsCheckmark = styled.svg`
    opacity: 0;

    width: 0.8rem;
    height: auto;

    transition: opacity 0.2s;
`;

export const addOnsinputRadio = styled.input`
    visibility: hidden;
    position: absolute;

    &:checked + ${addOnsLabel}{
        border: 0.0625rem solid ${props => props.theme.colors.primary.purplishBlue};

        transform: scale(1.01);

        ${addOnsContainerCheckmark}{
            outline: initial;
            background-color: ${props => props.theme.colors.primary.purplishBlue};

            ${addOnsCheckmark}{
                opacity: 1;
            }
        }
    }
`;

export const addOnsContainerText = styled.div`
    height: 100%;

    margin-block-start: auto;
    margin-inline-start: calc(0.802rem + 0.845vw);
`;

export const addOnsTitle = styled.h2`
    font-size: calc(0.787rem + 0.376vw);

    color: ${props => props.theme.colors.primary.marineblue};
`;

export const addOnsDescription = styled.p`
    font-size: calc(0.662rem + 0.376vw);

    color: ${props => props.theme.colors.neutral.coolGray};

    margin-block-start: calc(0.331rem + 0.188vw);
`;

export const addOnsPrice = styled.p`
    font-size: calc(0.662rem + 0.376vw);

    color: ${props => props.theme.colors.primary.purplishBlue};

    margin-inline-start: auto;
`;