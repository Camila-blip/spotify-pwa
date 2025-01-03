import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export function useAuth() {
    const postUser = () => {
        const paramsUri = new URLSearchParams({
            response_type: "token",
            client_id: process.env.REACT_APP_ID_CLIENTE!,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI!,
            scope: "user-read-private user-read-email playlist-read-private user-library-read user-top-read"
        });

        const uri = `https://accounts.spotify.com/authorize?${paramsUri.toString()}`;

        window.location.href = uri;
    };
    return { postUser };
}
