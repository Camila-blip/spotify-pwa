import { useState } from "react";
import { toast } from "react-toastify";

export function useAuth() {
    const [, setLoading] = useState<boolean>(false);
    const postUser = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://accounts.spotify.com/api/token",
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            "Basic " +
                            btoa(
                                process.env.REACT_APP_ID_CLIENTE +
                                    ":" +
                                    process.env.REACT_APP_SECRET
                            ),
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        grant_type: "client_credentials"
                    })
                }
            );

            if (!response.ok) {
                toast.error(
                    "Ops, algo deu errado. Tente novamente mais tarde."
                );
            }

            const data = await response.json();
            localStorage.setItem("spotifyToken", data.access_token);

            return data.access_token;
        } catch (error) {
            toast.error("Ops, algo deu errado. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };
    return { postUser };
}
