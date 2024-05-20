import styled from "styled-components";

export const ContainerBackground = styled.div`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.neutral.magnolia};

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        flex-direction: column;
        justify-content: flex-start;
        align-items: normal;
    }
`;

export const ContainerRegister = styled.main`
    width: calc(8.215rem + 56.15vw);
    height: calc(29.464rem + 8.929vw);

    box-sizing: border-box;
    padding: 1rem;

    background-color: ${props => props.theme.colors.neutral.white};

    border-radius: 1rem;

    -webkit-box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
    -moz-box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
    box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        flex: 1 1 0;

        width: 100%;
        height: auto;

        padding: initial;

        background-color: transparent;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
`;

export const Form = styled.form`
    height: 100%;

    display: flex;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        flex-direction: column;

        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="172" viewBox="0 0 375 172"><defs><path id="a" d="M0 0h375v172H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="%23fff"><use xlink:href="%23a"/></mask><use xlink:href="%23a" fill="%23483EFF"/><g mask="url(%23b)"><g transform="translate(-151.029 -133.957)"><path fill="%236259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"/><ellipse cx="129.864" cy="258.711" fill="%23FFAF7E" rx="96.329" ry="96.373"/><path fill="%23F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"/><g stroke="%23FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5"><path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"/></g></g></g></g></svg>');
        background-repeat: no-repeat;
        background-size: 100%;
    }
`;

export const FormSection = styled.section`
    width: 70%;
    height: 100%;

    display: grid;

    box-sizing: border-box;
    padding: calc(1.989rem + 0.845vw) clamp(1.563rem, -0.088rem + 7.042vw, 6.25rem) 1rem;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        width: 100%;

        padding: initial;
    }
`;

export const FormContainerField = styled.div `
    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        justify-self: center;

        width: 90vw;
        height: max-content;

        box-sizing: border-box;
        padding: calc(1.989rem + 0.845vw) clamp(1.563rem, -0.088rem + 7.042vw, 6.25rem) calc(3.535rem + -2.817vw);

        background-color: ${props => props.theme.colors.neutral.white};

        border-radius: 0.8rem;

        -webkit-box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
        -moz-box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
        box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
    }
`;

export const FormContainerButtons = styled.div `
    align-self: flex-end;

    display: flex;
    align-items: center;

    @media screen and (max-width: ${props => props.theme.breakPoints.lg}){
        width: 100%;
        height: 4.5rem;

        box-sizing: border-box;
        padding-inline: 1.5rem;

        background-color: ${props => props.theme.colors.neutral.white};

        -webkit-box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
        -moz-box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);
        box-shadow: 0.25rem 0.75rem 2.3125rem -0.3125rem rgba(0,0,0,0.15);

        margin-block-start: 1.4375rem;
    }
`;

export const FormButtonGoBack = styled.button `
    cursor: pointer;

    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.neutral.coolGray};

    border: none;

    background-color: transparent;
`;

export const FormButtonNext = styled.button `
    cursor: pointer;

    width: calc(5.465rem + 2.817vw);
    height: calc(2.324rem + 0.751vw);

    font-size: calc(0.956rem + 0.188vw);
    font-weight: 600;

    color: ${props => props.theme.colors.neutral.white};

    border: none;
    border-radius: calc(0.23rem + 0.3vw);

    background-color: ${props => props.theme.colors.primary.marineblue};

    margin-inline-start: auto;
`;

export const FormButtonConfirm = styled(FormButtonNext) `
    background-color: ${props => props.theme.colors.primary.purplishBlue};
`;