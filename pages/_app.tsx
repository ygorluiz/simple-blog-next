import React from "react";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
                <title>Blog</title>
            </Head>
            <Component {...pageProps} />
        </StyledThemeProvider>
    );
}

export default MyApp;
