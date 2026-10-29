import {Link} from "react-router-dom";

export default function NavBar(){
    return (
    <div>
        <Link to='/'>Главная</Link>
        <Link to='/tasks'>Задачи</Link>
        <Link to='/about'>Обо мне</Link>
        <Link to='/login'>Вход</Link>
        <Link to='tasks/tasks:id'></Link>
    </div>
    )
}
