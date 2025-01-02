import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "pages/login";
import Layout from "components/layout";
import Home from "pages/home";

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}
