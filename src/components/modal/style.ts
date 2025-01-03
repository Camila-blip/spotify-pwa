import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
`;

export const ExternalModal = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99.4%;
    height: 101%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    @media (max-width: 700px) {
        justify-content: center;
    }
`;

export const Modal = styled.div`
    background: ${(props) => props.theme.grayDark};
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 346px;
    width: 600px;
    box-shadow:
        0px 10px 10px -3px rgba(0, 0, 0, 0.1),
        0px 4px 5px -2px rgba(0, 0, 0, 0.04),
        0px 4px 4px -2px rgba(0, 0, 0, 0.02);
    position: relative;
    @media (max-width: 700px) {
        width: 320px;
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 1em;
    align-items: center;
    width: 100%;
`;

export const ButtonClose = styled.div`
    svg {
        color: ${(props) => props.theme.primaryColorLight};
    }
    :hover {
        cursor: pointer;
    }
`;

export const Content = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 1em 3em;
    align-items: center;
    width: 100%;
`;

export const Label = styled.label`
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.875rem;
`;

export const Input = styled.input`
    border: none;
    width: 100%;
    height: 36px;
    font-size: 1.5rem;
    text-align: center;
    font-family: "Rubik", sans-serif;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 0.16px;
    background: transparent;
    border-bottom: 1px solid ${(props) => props.theme.whiteTranslucent};
    color: ${(props) => props.theme.white};
    &:focus {
        outline: none;
    }
`;

export const ContentInput = styled.div`
    width: 100%;
`;
