import { useNavigate, useLocation } from "react-router-dom";

interface LoginPageProps {
    onLogin: () => void;
}
interface LocationState {
    from?: { pathname: string };
}



export default function LoginPage({ onLogin }: LoginPageProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState | null;

    const handleLogin = () => {
    onLogin()
    navigate(state?.from?.pathname ?? '/')
    };

    return (
        <div>
            <h1>Вход</h1>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
}