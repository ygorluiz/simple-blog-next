import React from "react";

import { Wrapper, Navigation } from "@components";
import GlobalStyle from "@styles/globalStyles";
import { Header } from "@components/header";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { getPostList } from "@definitions/backend";

type PostList = string[];
const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Wrapper>
                <GlobalStyle />
                <Navigation />
                <Header />
                {posts.length > 0 && (
                    <ul>
                        {posts.map((slug) => (
                            <li key={slug}>
                                <Link href={`post/${slug}`}>
                                    <a>{slug.replaceAll("-", " ")}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </Wrapper>
        </>
    );
};
export const getStaticProps = async () => {
    const posts: PostList = getPostList();
    return { props: { posts } };
};
export default Home;
