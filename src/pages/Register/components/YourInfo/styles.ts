import styled, { css } from "styled-components";

export const formInputList = styled.ul `
    display: flex;
    flex-direction: column;

    row-gap: 1.5rem;

    margin-block-start: 1.8rem;
`;

export const formInputItem = styled.li `
    display: flex;
    flex-direction: column;

    row-gap: 0.5rem;
`;

export const FormLabel = styled.label `
    display: flex;

    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};
`;

export const FormLabelError = styled.p `
    font-size: calc(0.831rem + 0.188vw);
    font-weight: 800;

    color: ${props => props.theme.colors.primary.strawberryRed};

    margin-inline-start: auto;
`;

export const FormInput = styled.input<{$invalid: boolean;}> `
    width: 100%;
    height: calc(3.162rem + 0.376vw);

    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};

    border: calc(0.049rem + 0.113vw) solid ${props => props.theme.colors.neutral.lightGray};
    border-radius: 0.5rem;

    box-sizing: border-box;
    padding: 0.2rem 1rem;

    background-color: transparent;

    ${props => props.$invalid ? css`
        border: initial;
        outline: calc(0.049rem + 0.113vw) solid ${props => props.theme.colors.primary.strawberryRed};
    ` : ''}
    
    &:focus{
        border: initial;
        outline: calc(0.049rem + 0.113vw) solid ${props => props.theme.colors.primary.purplishBlue};
    }

    &::placeholder{
        font-size: calc(0.956rem + 0.188vw);
        font-weight: 600;

        color: ${props => props.theme.colors.neutral.coolGray};
    }
`;