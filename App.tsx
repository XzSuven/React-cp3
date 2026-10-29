import "react";

import {Route, Routes} from "react-router-dom";
import HomePage from "./components/Навигация/HomePage.tsx";
import TaskPage from "./components/Навигация/TaskPage.tsx";
import AboutPage from "./components/Навигация/AboutPage.tsx";
import NotFoundPage from "./components/Навигация/NotFoundPage.tsx";
import TaskDetailsPage from "./components/Навигация/TasksDetailsPage.tsx";
import {useState} from "react";
import LoginPage from "./components/Навигация/LoginPage.tsx";
import PrivateRoute from "./components/Навигация/PrivateRoute.tsx";

// import {AuthProvider} from "./CP2/AuthProvider.tsx";
// import {Header} from "./SubComp/Header.tsx";
// import {Content} from "./SubComp/Content.tsx";

// import Practise from "./components/practise.tsx";

// import StateEx from "./components/StateEx.tsx";

// import type { Task } from './types.ts'

// import TaskBoard from "./components/TaskBoard";

// import ShoppingList from "./components/212121.tsx";

// import Effect from "./components/StateEx.tsx";

// import NavBar from "./components/Навигация/Navigator.tsx";
// import {Route, Routes} from "react-router-dom";
// import HomePage from "./components/Навигация/HomePage.tsx";

function App(){
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const login = () => setIsAuth(true);

    return (
        <>
            {/*<TaskBoard tasks={tasks} />*/}
            {/*<ShoppingList/>*/}
            {/*<Effect />*/}
            {/*<StateEx/>*/}
            {/*<Practise/>*/}

            {/*<AuthProvider>*/}
            {/*    <Header/>*/}
            {/*    <Content/>*/}
            {/*</AuthProvider>*/}

            {/*<NavBar/>*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<HomePage/>}/>*/}
            {/*</Routes>*/}

            {/*CP3*/}
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route
                    path="/tasks"  element={
                    <PrivateRoute isAuth={isAuth}>
                        <TaskPage/>
                    </PrivateRoute>
                }
                />
                <Route
                    path="/tasks/:id"  element={
                    <PrivateRoute isAuth={isAuth}>
                        <TaskDetailsPage/>
                    </PrivateRoute>
                }
                />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/login" element={<LoginPage onLogin={login}/>}/>
            </Routes>
        </>
    );
}

export default App;