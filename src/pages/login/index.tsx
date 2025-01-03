import Button from "components/button";
import { Content, Wrapper } from "./style";
import Logo from "assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";

export default function Login() {
    const router = useNavigate();
    const { postUser } = useAuth();
    const location = useLocation();
    const hash = location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get("access_token");

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            router("../home");
        }
    }, [token]);

    async function handleLogin() {
        postUser();
    }

    return (
        <Wrapper>
            <Content>
                <img src={Logo} alt="Logo" />
                <strong>
                    Entra com sua conta Spotify clicando no botão abaixo
                </strong>
                <Button text="Entrar" onClick={handleLogin} />
            </Content>
        </Wrapper>
    );
}
