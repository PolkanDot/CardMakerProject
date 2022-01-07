import style from './NavBar.module.css'
import NavBarButton from './NavBar_button/NavBar_button'

export default function NavBar(){
    return (
        <nav className = {style.navbar}>
            <NavBarButton str={"Открыть"}/>
            <NavBarButton str={"Создать"}/>
            <NavBarButton str={"Сохранить как"} />
            <NavBarButton str={"Загрузить шаблон"} />
            <NavBarButton str={"Отменить изменение"} />
            <NavBarButton str={"Вернуть изменение"} />
        </nav>
    )    
}