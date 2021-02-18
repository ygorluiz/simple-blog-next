import React, { ReactNode } from "react";
import { NavBar } from "./styled";
import { useRouter } from "next/router";
import Link from "next/link";

const Links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
];
type NavAnchor = {
    path: string;
    children: ReactNode;
};

function NavAnchor({ path, children }: NavAnchor) {
    return (
        <Link href={path}>
            <a>{children}</a>
        </Link>
    );
}

export const Navigation: React.FC = ({ children }) => {
    const { pathname } = useRouter();
    return (
        <NavBar>
            <div>
                <h1>Blog</h1>
            </div>
            <div>
                <ul>
                    {Links.map(({ name, path }) => (
                        <li key={path}>
                            {path === pathname ? (
                                <span>{name}</span>
                            ) : (
                                <NavAnchor path={path}>{name}</NavAnchor>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </NavBar>
    );
};
