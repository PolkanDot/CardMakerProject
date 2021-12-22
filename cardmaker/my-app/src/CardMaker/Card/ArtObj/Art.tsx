import elementStyles from '../Element.module.css';
import {ArtElement} from '../../../Types';


type ArtElementProps = {
    artElement: ArtElement,
}

function FunArt(props: ArtElementProps) {
    const style = {
        left: props.artElement.position.x,
        top: props.artElement.position.y,
        width: props.artElement.elementSize.width,
        height: props.artElement.elementSize.height,
    }
    return (
        <img src={props.artElement.src as string} className={elementStyles.element} style={style} />
    );
}

export default FunArt;