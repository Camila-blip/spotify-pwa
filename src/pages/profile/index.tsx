import { useMusicStore } from "context/Music.context";
import { useGetUser } from "hooks/useMusicData";
import { Content, Wrapper } from "./style";
import Button from "components/button";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
export default function Profile() {
    const { listUser } = useGetUser();
    const { setUser } = useMusicStore();
    const queryClient = useQueryClient();
    const router = useNavigate();

    function handleLogout() {
        setUser(null);
        localStorage.removeItem("token");
        queryClient.clear();
        router("../");
    }
    return (
        <Wrapper>
            <Content>
                {listUser && <img src={listUser?.images[0]?.url} alt="Logo" />}
                <h2>{listUser?.display_name}</h2>
                <Button text="Sair" onClick={handleLogout} />
            </Content>
        </Wrapper>
    );
}
