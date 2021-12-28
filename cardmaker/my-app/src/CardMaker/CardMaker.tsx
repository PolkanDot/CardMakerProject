import style from './CardMaker.module.css';
import FunCard from './Card/Card';
import FunNavBar from './TopMenu/NavBar/NavBar';
import FunToolBar from './TopMenu/ToolBar/ToolBar';
import { CardMaker } from '../Types';
import FunTopMenu from './TopMenu/TopMenu';

type CardMakerProps = {
    cardMaker: CardMaker
}

export default function FunCardMaker(props: CardMakerProps) {
    return (
        <div className={style.cardMaker}>
            <FunTopMenu />
            <FunCard card={props.cardMaker.card} />
        </div>
    );
}

