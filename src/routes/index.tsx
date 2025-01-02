import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login";
import Layout from "components/layout";
import Home from "pages/home";
import Artists from "pages/artists";
import Playlists from "pages/playlists";
import Profile from "pages/profile";

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    );
}
