import {useLocation, Navigate} from "react-router-dom";
import type {ReactNode} from "react";

interface PrivateRouteProps {
    isAuth: boolean;
    children: ReactNode;
}

function PrivateRoute({ isAuth, children }: PrivateRouteProps) {
    const location = useLocation();

    if (!isAuth) {
         return (
             <Navigate to={"/login"} replace state={{from: location}} />
         )
    }
    return <>{children}</>;
}
export default PrivateRoute;