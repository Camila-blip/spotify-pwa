import { ArrowLeft } from "assets/icons";
import { useMusicStore } from "context/Music.context";
import { ContentTitle, Title } from "./style";
import {
    Button,
    ContentContainer,
    Header,
    Image,
    Subtitle,
    TitleItens
} from "components/itens-music/style";
import { useNavigate } from "react-router-dom";
import { useGetAlbums } from "hooks/useMusicData";
import moment from "moment";
import { useState } from "react";
type typeAlbums = {
    id: string;
    name: string;
    images: { url: string }[];
    release_date: string;
};

export default function Albums() {
    const { artists } = useMusicStore();
    const [page, setPage] = useState<number>(0);
    const limit = 5;
    const offset = page * limit;
    const router = useNavigate();

    const { listAlbums, refetchlistAlbums } = useGetAlbums(
        artists[0].id,
        limit,
        offset
    );

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
    };
    return (
        <>
            <Header>
                <ContentTitle>
                    <div onClick={() => router("../artists")}>
                        <ArrowLeft />
                    </div>
                    <Title>{artists[0]?.name}</Title>
                </ContentTitle>
                <Image
                    border
                    src={artists[0]?.images[0]?.url}
                    alt={artists[0]?.name}
                />
            </Header>
            <ContentContainer>
                {listAlbums?.items?.map((artist: typeAlbums) => {
                    return (
                        <ContentContainer
                            align="center"
                            direction={"row"}
                            key={artist.id}
                        >
                            <Image
                                src={artist?.images[0]?.url}
                                alt={artist?.name}
                            />
                            <ContentContainer>
                                <TitleItens>{artist?.name}</TitleItens>
                                <Subtitle>
                                    {moment(artist?.release_date).format(
                                        "DD/MM/YYYY"
                                    )}
                                </Subtitle>
                            </ContentContainer>
                        </ContentContainer>
                    );
                })}
            </ContentContainer>
            <ContentContainer direction="row" gap={10}>
                <Button onClick={handlePreviousPage} disabled={page === 0}>
                    Anterior
                </Button>
                <Button
                    onClick={handleNextPage}
                    disabled={listAlbums?.total <= (page + 1) * limit}
                >
                    Proximo
                </Button>
            </ContentContainer>
        </>
    );
}
