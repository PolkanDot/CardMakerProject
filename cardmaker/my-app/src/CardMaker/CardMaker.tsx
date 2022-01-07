import style from './CardMaker.module.css';
import Canvas from './Card/Card';
import { CardMaker } from '../Types';
import TopMenu from './TopMenu/TopMenu';

type CardMakerProps = {
    cardMaker: CardMaker
}

export default function Editor(props: CardMakerProps) {
    return (
        <div className={style.cardMaker}>
            <TopMenu/>
            <Canvas card={props.cardMaker.card} />
        </div>
    );
}

