import style from './NavBar.module.css'
import FunNavBarButton from './NavBar_button/NavBar_button'

export default function FunNavBar(){
    return (
        <nav className = {style.navbar}>
            <FunNavBarButton str={"Открыть"}/>
            <FunNavBarButton str={"Создать"}/>
            <FunNavBarButton str={"Сохранить как"} />
            <FunNavBarButton str={"Загрузить шаблон"} />
            <FunNavBarButton str={"Отменить изменение"} />
            <FunNavBarButton str={"Вернуть изменение"} />
        </nav>
    )    
}