/**
* @file _document.js
* @author Nicolas C.
* @since 28/5/2022
* @description Updates properties of the main document for NextJS
*/

import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}