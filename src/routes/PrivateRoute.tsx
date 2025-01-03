import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
    const storedIsAuthenticated = localStorage.getItem("token");
    if (storedIsAuthenticated) {
        return children;
    }
    return <Navigate to="/" replace />;
}
