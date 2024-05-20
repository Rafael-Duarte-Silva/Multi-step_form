import { ThemeProvider } from "styled-components";
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import { Outlet } from "react-router-dom";

export const App = () => {
    return (
        <ThemeProvider theme={light}>
            <GlobalStyle/>

            <Outlet/>
        </ThemeProvider>
    )
};