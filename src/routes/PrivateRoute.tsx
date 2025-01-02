import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
    const storedIsAuthenticated = localStorage.getItem("spotifyToken");
    if (storedIsAuthenticated) {
        return children;
    }
    return <Navigate to="/login" replace />;
}
