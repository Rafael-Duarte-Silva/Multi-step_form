import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: {
                marineblue: string,
                purplishBlue: string,
                pastelBlue: string,
                lightBlue: string,
                strawberryRed: string,
            },

            neutral: {
                coolGray: string,
                lightGray: string,
                magnolia: string,
                alabaster: string,
                white: string,
            }
        },

        breakPoints: {
            xs: string,
            sm: string,
            md: string,
            lg: string,
            xl: string,
            xxl: string
        },

        size: {
            Font: string,
        }
    }
}