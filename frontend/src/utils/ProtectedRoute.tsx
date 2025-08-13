// utils/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../middlewares/Authenticated";
import type { props } from "../types/ProtectedRouteProp";

export const ProtectedRoute = ({ children }: props) => {
  const authed = isAuthenticated(); 

  if (!authed) {
    return <Navigate to="/signin" replace />; 
  }

  return children ? children : <Outlet />; 
};
