import { ThemeProvider } from "styled-components";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

import { QueryClient } from "@tanstack/react-query";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";
import MainRoutes from "routes";
import { ToastContainer } from "react-toastify";

export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 1000 * 60 * 60 * 24 // 24 hours
            }
        }
    });

    const persister = createSyncStoragePersister({
        storage: window.localStorage
    });

    return (
        <>
            <PersistQueryClientProvider
                client={queryClient}
                persistOptions={{ persister }}
            >
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ToastContainer autoClose={1000} />
                    <MainRoutes />
                </ThemeProvider>
            </PersistQueryClientProvider>
        </>
    );
}
