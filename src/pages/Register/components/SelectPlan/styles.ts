import styled, { css } from "styled-components";

export const planList = styled.ul `
    display: flex;
    column-gap: 1.125rem;

    margin-block-start: calc(1.232rem + 1.408vw);

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        flex-direction: column;

        row-gap: 0.75rem;
    }
`;

export const planIntem = styled.li `
    flex: 1 1 8.5rem;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        flex: none;
    }
`;

export const planLabel = styled.label<{$invalid: boolean}> `
    cursor: pointer;

    height: 100%;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    padding: 1rem;

    border-radius: clamp(0.375rem, 0.225rem + 0.638vw, 0.8rem);
    border: 0.0625rem solid ${props => props.theme.colors.neutral.coolGray};

    ${props => props.$invalid ? css`
        border: 0.0625rem solid ${props => props.theme.colors.primary.strawberryRed};
    ` : ''}

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        flex-direction: row;

        align-items: center;
    }
`;

export const planinputRadio = styled.input `
    visibility: hidden;
    position: absolute;

    &:checked + ${planLabel}{
        border: 0.0625rem solid ${props => props.theme.colors.primary.purplishBlue};
        
        transform: scale(1.01);
    }
`;

export const planImage = styled.svg `
    width: 2.5rem;
    height: auto;
`;

export const planContainerText = styled.div `
    margin-block-start: 2.75rem;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        margin-block-start: initial;
        margin-inline-start: 0.8rem;
    }
`;

export const planTitle = styled.h2 `
    font-size: calc(0.956rem + 0.188vw);

    color: ${props => props.theme.colors.primary.marineblue};
`;

export const planPrice = styled.p `
    font-size: calc(0.831rem + 0.188vw);

    color: ${props => props.theme.colors.neutral.coolGray};

    margin-block-start: calc(0.456rem + 0.188vw);
`;

export const planDiscount = styled.p `
    font-size: 0.875rem;
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};

    margin-block-start: calc(0.456rem + 0.188vw);
`;

export const planToggleLabel = styled.label `
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    
    column-gap: 1.5rem;

    margin-block-start: calc(2.199rem + 0.751vw);
`;

export const planToggleInputCheckbox = styled.input `
    visibility: hidden;
    position: absolute;
`;

export const planToggleText = styled.span `
    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};
`;

export const planToggleContainer = styled.div `
    width: 2.375rem;
    height: 1.25rem;

    display: flex;
    align-items: center;

    box-sizing: border-box;
    padding-inline-start: 0.25rem;

    background-color: ${props => props.theme.colors.primary.marineblue};

    border-radius: 2rem;
`;

export const planToggle = styled.div<{$animable: boolean;}> `
    width: 0.75rem;
    height: 0.75rem;

    background-color: ${props => props.theme.colors.neutral.white};

    border-radius: 50%;
    border: initial;

    ${props => props.$animable ? css`
        transform: translateX(150%);
    ` : ''}
    
    transition-duration: 0.5s;
`;