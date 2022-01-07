import { Card } from '../../../Types';

type cardProps = {
    card: Card,
}

export default function CardBackground(props: cardProps) {

    let background: string = '#ffffff';

    if (props.card.background.type == 'color') {
        background = props.card.background.color
    }

    if (props.card.background.type == 'src') {
        background = props.card.background.src
    }

    return (background);
}    