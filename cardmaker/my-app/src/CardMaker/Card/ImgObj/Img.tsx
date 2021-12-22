import elementStyles from '../Element.module.css';
import { ImageElement} from '../../../Types';


type ImageElementProps = {
    imageElement: ImageElement,
}

function FunImg(props: ImageElementProps) {
    const style = {
        left: props.imageElement.position.x,
        top: props.imageElement.position.y,
        width: props.imageElement.elementSize.width,
        height: props.imageElement.elementSize.height
    }       
    return (
        <img src={props.imageElement.src as string} className={elementStyles.element} style={style} />
    );
    
}

export default FunImg;