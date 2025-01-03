import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";
import MainRoutes from "routes";
import { ToastContainer } from "react-toastify";

export default function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });

    return (
        <>
            <Helmet>
                <title>Spotify PWA</title>
                <meta name="description" content="Spotify artistas." />
            </Helmet>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ToastContainer autoClose={1000} />
                    <MainRoutes />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    );
}
