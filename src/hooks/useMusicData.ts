import { api } from "api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetArtists() {
    const {
        data: listArtists,
        refetch: refetchlistArtists,
        isFetching: isLoadinglistArtists
    } = useQuery({
        queryKey: ["listArtists"],
        queryFn: () =>
            api(
                "artists?ids=64KEffDW9EtZ1y2vBYgq8T,45eNHdiiabvmbp4erw26rg,7Fmu1wTZGOG9b2w5qvM9XR,5krSTcI0xPGmeloiQTPsYP"
            )
    });
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
    } = useQuery({
        queryKey: ["listAlbums", id, limit, offset],
        queryFn: () =>
            api(`artists/${id}/albums?limit=${limit}&offset=${offset}`)
    });
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
    } = useQuery({
        queryKey: ["listPlaylists", limit, offset],
        queryFn: () => api(`me/playlists?limit=${limit}&offset=${offset}`)
    });
    return {
        listPlaylists,
        refetchlistPlaylists,
        isLoadinglistPlaylists
    };
}

export function useCreatePlaylist() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: ({ id, name }: { id: string; name: string }) =>
            api(`users/${id}/playlists`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({ name })
            }),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: ["listPlaylists"] });
        }
    });

    return {
        ...mutation,
        createPlaylist: mutation.mutate,
        isLoading: mutation.status === "pending",
        isError: mutation.isError,
        isSuccess: mutation.isSuccess
    };
}

export function useGetUser() {
    const {
        data: listUser,
        refetch: refetchlistUser,
        isFetching: isLoadinglistUser
    } = useQuery({
        queryKey: ["listUser"],
        queryFn: () => api("me")
    });
    return {
        listUser,
        refetchlistUser,
        isLoadinglistUser
    };
}
