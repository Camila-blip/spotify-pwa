import { useMusicStore } from "context/Music.context";
import { useGetUser } from "hooks/useMusicData";
import { useEffect } from "react";

export default function Home() {
    const { listUser } = useGetUser();
    const { setUser } = useMusicStore();
    useEffect(() => {
        setUser(listUser);
    }, [listUser]);

    return <></>;
}
