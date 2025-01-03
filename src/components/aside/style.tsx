import styled from "styled-components";

export const AsideContent = styled.aside`
    height: 100%;
    width: 250px;
    background-color: ${(props) => props.theme.black};
    padding: 30px 30px 20px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    img {
        width: 164px;
        height: 49.06px;
    }
`;

export const Title = styled.span`
    color: ${(props) => props.theme.gray500};
    font-weight: 700;
    line-height: 24.74px;
    letter-spacing: -0.96px;
    transition: transform 0.6s ease-in-out;
    font-size: 1.1875rem;
`;

export const MenuOption = styled.div<{ active: boolean }>`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    ${({ active, theme }) =>
        active &&
        `
    span {
        color: ${theme.white};
    }
    svg {
        fill: ${theme.white};
        g {
            path {
                fill: ${theme.white};
            }
        }
    }
`}

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        span {
            color: ${(props) => props.theme.white};
        }
        svg {
            fill: ${(props) => props.theme.white};
            g {
                path {
                    fill: ${(props) => props.theme.white};
                }
            }
        }
    }
`;

export const SidebarMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const ButtonPWA = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.white};
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    font-size: 1.1875rem;
    font-weight: 700;

    svg {
        margin-top: -2px;
    }
`;
