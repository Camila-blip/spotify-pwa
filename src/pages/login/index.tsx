import Button from "components/button";
import { Content, Wrapper } from "./style";
import Logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export default function Login() {
    const router = useNavigate();
    const { postUser } = useAuth();
    async function handleLogin() {
        const getToken = await postUser();
        if (getToken) router("../home");
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
