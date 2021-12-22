import style from './CardMaker.module.css';
import FunCard from './Card/Card';
import { CardMaker } from '../Types';

type CardMakerProps = {
    cardMaker: CardMaker
}

export default function FunCardMaker(props: CardMakerProps) {
    return (
        <div className={style.cardMaker}>
            <FunCard card={props.cardMaker.card} />
        </div>
    );
}

