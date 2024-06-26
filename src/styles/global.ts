import { createGlobalStyle } from "styled-components";

import UbuntuBold from '../assets/fonts/Ubuntu-Bold.ttf';
import UbuntuMedium from '../assets/fonts/Ubuntu-Medium.ttf';
import UbuntuRegular from '../assets/fonts/Ubuntu-Regular.ttf';

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    @font-face {
        font-family: 'Ubuntu', sans-serif;
        src: local('ubuntu-bold'), local('Ubuntu-Medium'),
        local('Ubuntu-Regular'), url(${UbuntuBold}) format('ttf'),
        url(${UbuntuMedium}) format('ttf'), url(${UbuntuRegular}) format('ttf');
    }

    *{
        margin: 0;
        padding: 0;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        font-family: "Ubuntu", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;

        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img{
	    max-inline-size: 100%;
        block-size: auto;
    }
`;