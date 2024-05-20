import styled from "styled-components";

export const FormLegend = styled.legend `
    font-size: calc(0.956rem + 0.188vw);
    font-weight: 400;

    color: ${props => props.theme.colors.neutral.coolGray};

    line-height: 1.5;
`;