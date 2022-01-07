import style from './NavBar_button.module.css'

type StringProps = {
    str: string,
}

export default function NavBarButton(props: StringProps) {
    return (
        <button className={style.navbar__button}>
            {props.str}
        </button>
    )
}    