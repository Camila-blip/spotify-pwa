import { api } from "api/api";
import { useQuery } from "react-query";

export function useGetArtists() {
    const {
        data: listArtists,
        refetch: refetchlistArtists,
        isFetching: isLoadinglistArtists
    } = useQuery(["listArtists"], () =>
        api(
            "artists?ids=64KEffDW9EtZ1y2vBYgq8T,45eNHdiiabvmbp4erw26rg,7Fmu1wTZGOG9b2w5qvM9XR,5krSTcI0xPGmeloiQTPsYP"
        )
    );
    return {
        listArtists,
        refetchlistArtists,
        isLoadinglistArtists
    };
}

export function useGetAlbums(id: string, limit: number, offset: number) {
    const {
        data: listAlbums,
        refetch: refetchlistAlbums,
        isFetching: isLoadinglistAlbums
    } = useQuery(["listAlbums", id, limit, offset], () =>
        api(`artists/${id}/albums?limit=${limit}&offset=${offset}`)
    );
    return {
        listAlbums,
        refetchlistAlbums,
        isLoadinglistAlbums
    };
}

export function useGetPlaylists(limit: number, offset: number) {
    const {
        data: listPlaylists,
        refetch: refetchlistPlaylists,
        isFetching: isLoadinglistPlaylists
    } = useQuery(["listPlaylists", limit, offset], () =>
        api(`me/playlists?limit=${limit}&offset=${offset}`)
    );
    return {
        listPlaylists,
        refetchlistPlaylists,
        isLoadinglistPlaylists
    };
}
