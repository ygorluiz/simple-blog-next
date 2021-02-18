import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-items: center;
    min-height: 100vh;
`;

export const NavBar = styled.nav`
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: baseline;
    justify-content: space-between;
    padding: 16px 32px;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            a {
                text-decoration: none;
                color: inherit;
                margin-left: 32px;
                margin-right: 32px;
                transition: all 0.3s;

                &:hover {
                    color: #f74b84;
                    font-weight: 700;
                }
            }
        }
    }
`;
