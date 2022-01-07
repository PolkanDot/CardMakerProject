import style from './TopMenu.module.css';
import NavBar from './NavBar/NavBar';
import ToolBar from './ToolBar/ToolBar';

export default function TopMenu() {
    return (
        <header className={style.header}>
            <NavBar />
            <ToolBar />
        </header>     
    );
}