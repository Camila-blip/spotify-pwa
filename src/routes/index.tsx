import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login";
import Layout from "components/layout";
import Home from "pages/home";
import Artists from "pages/artists";
import Playlists from "pages/playlists";
import Profile from "pages/profile";
import PrivateRoute from "./PrivateRoute";

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/artists"
                        element={
                            <PrivateRoute>
                                <Artists />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/playlists"
                        element={
                            <PrivateRoute>
                                <Playlists />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </Router>
    );
}
