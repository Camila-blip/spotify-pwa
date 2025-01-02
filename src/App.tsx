import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import theme from "styles/themes/colors";
import GlobalStyle from "styles";
import MainRoutes from "routes";
export default function App() {
    return (
        <>
            <Helmet>
                <title>Spotify PWA</title>
                <meta name="description" content="Spotify artistas." />
            </Helmet>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainRoutes />
            </ThemeProvider>
        </>
    );
}
