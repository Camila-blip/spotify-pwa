import {
    ContentContainer,
    Image,
    TitleItens
} from "components/itens-music/style";
import { Title } from "components/title";
import { useMusicStore } from "context/Music.context";
import { useGetArtists } from "hooks/useMusicData";
import { useNavigate } from "react-router-dom";

type typeArtists = {
    images: {
        url: string;
    }[];
    name: string;
    id: string;
};

export default function Artists() {
    const { listArtists } = useGetArtists();
    const { setArtists } = useMusicStore();
    const router = useNavigate();
    console.log(listArtists);
    return (
        <>
            <Title.Container>
                <Title.H1 title="Top Artistas" />
                <Title.Description description="Aqui você encontra seus artistas preferidos" />
            </Title.Container>
            <ContentContainer>
                {listArtists?.artists?.map((artist: typeArtists) => {
                    return (
                        <ContentContainer
                            align="center"
                            direction={"row"}
                            key={artist.id}
                        >
                            <Image
                                border
                                src={artist.images[0].url}
                                alt={artist.name}
                                onClick={() => {
                                    setArtists([artist]), router("../albums");
                                }}
                            />
                            <TitleItens
                                onClick={() => {
                                    setArtists([artist]), router("../albums");
                                }}
                            >
                                {artist.name}
                            </TitleItens>
                        </ContentContainer>
                    );
                })}
            </ContentContainer>
        </>
    );
}
