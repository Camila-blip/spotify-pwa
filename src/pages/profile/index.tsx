import { useMusicStore } from "context/Music.context";
import { useGetUser } from "hooks/useMusicData";
import { useEffect } from "react";
import { Content, Wrapper } from "./style";
import Button from "components/button";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const { listUser } = useGetUser();
    const { user, setUser } = useMusicStore();
    const queryClient = useQueryClient();
    const router = useNavigate();

    useEffect(() => {
        !user && setUser(listUser);
    }, [listUser]);

    function handleLogout() {
        setUser(null);
        localStorage.removeItem("token");
        queryClient.clear();
        router("../");
    }
    return (
        <Wrapper>
            <Content>
                {user && <img src={user.images[0].url} alt="Logo" />}
                <h2>{user?.display_name}</h2>
                <Button text="Sair" onClick={handleLogout} />
            </Content>
        </Wrapper>
    );
}
