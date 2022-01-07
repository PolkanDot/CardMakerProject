import styles from './Card.module.css';
import { Card, Element, TextElement, ImageElement, ArtElement } from '../../Types';
import CardBackground from './CardBackground/CardBackground';
import Text from './TextObj/Text';
import Image from './ImgObj/Img';
import Art from './ArtObj/Art';

type cardProps = {
    card: Card,
}

function ChoosingElementType(objects: Element[], currentId: number, zIndex: number) {
    let i = 0
    while ( objects[i].elementId != currentId) {
        i++;
    }
    if (objects[i].elementId == currentId) {
        const element = objects[i]
        switch (element.type) {
            case 'text':
                return <Text key={element.elementId} textElement={element} />;
            case 'img':
                return <Image key={element.elementId} imageElement={element} />;
            case 'art':
                return <Art key={element.elementId} artElement={element} />;
        }
    }
}

function Z_Indexation(displayList: number[], objects: Element[]){
    for (var i = 0; i < displayList.length; i++) {
        return ChoosingElementType(objects, displayList[i], i)
    }
}

export default function Canvas(props: cardProps) {

    const style = {
        width: props.card.cardSize.width,
        height: props.card.cardSize.height,
        background: CardBackground(props),
    }  

    return (
        <div className={styles.card} style={style}>
            {Z_Indexation(props.card.displayList, props.card.objects)}       
        </div>          
    );
}