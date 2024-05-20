import styled from "styled-components";

export const ContainerSteps = styled.aside`
    width: 30.2%;
    height: 100%;

    box-sizing: border-box;
    padding: 2.5rem calc(-0.411rem + 2.679vw);

    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568"><rect width="274" height="568" fill="%23483EFF" rx="10"/><mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><rect width="274" height="568" fill="%23fff" rx="10"/></mask><g mask="url(%23a)"><path fill="%236259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="%23F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="%23fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="%23FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g></svg>');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    border-radius: 0.8rem;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 2rem;

        background: none;
    }
`;

export const StepsList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        width: max-content;

        flex-direction: row;

        column-gap: calc(0.437rem + 3.257vw);
    }
`;

export const StepsNumber = styled.div`
    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.colors.neutral.white};

    border: 0.125rem solid ${props => props.theme.colors.neutral.white};
    border-radius: 50%;

    background-color: transparent;
`;

export const StepsItem = styled.li<{$currentStep: number, $lastStep: number}>`
    display: flex;
    align-items: center;

    column-gap: calc(0.732rem + 0.298vw);

    text-transform: uppercase;

    &:nth-child(${props =>
        props.$currentStep < props.$lastStep ? props.$currentStep : props.$lastStep
    }) ${StepsNumber}{
        border-color: ${props => props.theme.colors.primary.lightBlue};

        color: ${props => props.theme.colors.primary.marineblue};

        background-color: ${props => props.theme.colors.primary.lightBlue};
    }

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        column-gap: initial;
    }
`;

export const StepsContainerText = styled.span`
    display: flex;
    flex-direction: column;
    row-gap: 0.45rem;
`;

export const StepsTittle = styled.span`
    color: ${props => props.theme.colors.neutral.lightGray};

    font-size: calc(0.607rem + 0.298vw);
    font-weight: 400;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        display: none;
    }
`;

export const StepsText = styled.span`
    color: ${props => props.theme.colors.neutral.white};

    font-size: calc(0.732rem + 0.298vw);
    font-weight: 700;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        display: none;
    }
`;