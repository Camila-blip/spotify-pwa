import Button from "components/button";
import {
    ContentContainer,
    Header,
    Image,
    TitleItens,
    Button as ButtonPagination,
    Subtitle
} from "components/itens-music/style";
import { Title } from "components/title";
import { useGetPlaylists } from "hooks/useMusicData";
import { useState } from "react";

type typePlaylist = {
    id: string;
    name: string;
    images: { url: string }[];
    description: string;
};

export default function Playlists() {
    const [page, setPage] = useState<number>(0);
    const limit = 5;
    const offset = page * limit;
    const { listPlaylists } = useGetPlaylists(limit, offset);

    const handleNextPage = async () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = async () => {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <>
            <Header>
                <Title.Container bottom="0px">
                    <Title.H1 title="Minhas Playlists" />
                    <Title.Description description="Sua coleção pessoal de playlists" />
                </Title.Container>
                <Button text="Criar playlist" />
            </Header>
            <ContentContainer>
                {listPlaylists?.items?.map((playlist: typePlaylist) => {
                    return (
                        <ContentContainer
                            align="center"
                            direction={"row"}
                            key={playlist.id}
                        >
                            <Image
                                src={playlist?.images[0]?.url}
                                alt={playlist?.name}
                            />
                            <ContentContainer>
                                <TitleItens>{playlist?.name}</TitleItens>
                                <Subtitle>
                                    {" "}
                                    {truncateText(playlist?.description, 15)}
                                </Subtitle>
                            </ContentContainer>
                        </ContentContainer>
                    );
                })}
            </ContentContainer>
            <ContentContainer direction="row" gap={10}>
                <ButtonPagination
                    onClick={handlePreviousPage}
                    disabled={page === 0}
                >
                    Anterior
                </ButtonPagination>
                <ButtonPagination
                    onClick={handleNextPage}
                    disabled={listPlaylists?.total <= (page + 1) * limit}
                >
                    Proximo
                </ButtonPagination>
            </ContentContainer>
        </>
    );
}
