import style from './TopMenu.module.css';
import FunNavBar from './NavBar/NavBar';
import FunToolBar from './ToolBar/ToolBar';

function FunTopMenu() {
    return (
        <header className={style.header}>
            <FunNavBar />
            <FunToolBar />
        </header>     
    );
}

export default FunTopMenu