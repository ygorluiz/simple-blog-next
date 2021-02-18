import React from "react";
import GlobalStyle from "@styles/globalStyles";
import { Navigation, Wrapper } from "@components";

const About: React.FC = () => {
    return (
        <>
            <Wrapper>
                <GlobalStyle />
                <Navigation />

                <div>About Page!</div>
            </Wrapper>
        </>
    );
};
export default About;
