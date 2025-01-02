import Button from "components/button";
import { Content, Wrapper } from "./style";
import Logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const router = useNavigate();
    return (
        <Wrapper>
            <Content>
                <img src={Logo} alt="Logo" />
                <strong>
                    Entra com sua conta Spotify clicando no botão abaixo
                </strong>
                <Button text="Entrar" onClick={() => router("../home")} />
            </Content>
        </Wrapper>
    );
}
