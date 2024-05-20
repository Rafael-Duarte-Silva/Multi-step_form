import styled from "styled-components";

export const Summary = styled.dl `
    display: flex;
    flex-direction: column;

    padding-inline: calc(0.739rem + 0.845vw);

    margin-block-start: 2rem;
`;

export const SummaryContainerHeader = styled.div `
    display: flex;
    align-items: center;
`;

export const SummaryHeaderTitle = styled.dt `
    font-size: calc(0.912rem + 0.376vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};

    text-transform: capitalize;
`;

export const SummaryHeaderChange = styled.p `
    cursor: pointer;

    font-size: calc(0.831rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.neutral.coolGray};

    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.primary.marineblue};

    margin-block-start: calc(0.456rem + 0.188vw);
`;

export const SummaryHeaderPrice = styled.dd `
    font-size: calc(0.912rem + 0.376vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};

    margin-inline-start: auto;
`;

export const SummarySeparator = styled.hr `
    border: 0.0625rem solid ${props => props.theme.colors.neutral.lightGray};

    margin-block: calc(0.868rem + 0.563vw);
`;

export const SummaryAddOnsContainer = styled.div `
    display: grid;
    grid-template-columns: auto auto;

    row-gap: calc(1.309rem + 0.282vw);
`;

export const SummaryAddOnsTitle = styled.dt `
    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.neutral.coolGray};
`;

export const SummaryAddOnsPrice = styled.dd `
    justify-self: flex-end;

    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.marineblue};
`;

export const SummaryTotalContainer = styled.div `
    display: flex;

    margin-block-start: calc(2.229rem + 1.69vw);
`;

export const SummaryTotalTitle = styled.dt `
    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.neutral.coolGray};
`;

export const SummaryTotalPrice = styled.dd `
    font-size: calc(1.162rem + 0.376vw);
    font-weight: 600;

    color: ${props => props.theme.colors.primary.purplishBlue};

    margin-inline-start: auto;
`;