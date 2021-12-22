import styles from './Card.module.css';
import { ArtElement, ImageElement, TextElement, Element, Card as Card, Background} from '../../Types';
import FunText from './TextObj/Text';
import FunImg from './ImgObj/Img';
import FunArt from './ArtObj/Art';

type cardProps = {
    card: Card,
}


function FunCard(props: cardProps) {

    let background: string = '#ffffff';

    if ('color' in props.card.background){
        background = props.card.background.color
    }

    if ('src' in props.card.background) {
        background = props.card.background.src
    }

    const style = {
        width: props.card.cardSize.width,
        height: props.card.cardSize.height,
        background: background,
    }

    return (
        <div className={styles.card} style={style} id="card">
            {
            props.card.objects.map(element => {
                switch (element.type) {
                    case 'text':
                        return <FunText textElement={element as TextElement} />;
                    case 'img':
                        return <FunImg imageElement={element as ImageElement} />;
                    case 'art':
                        return <FunArt artElement={element as ArtElement} />;
                    }
                }) 
            }               
        </div>
    );
}

export default FunCard;

