import elementStyles from '../Element.module.css';
import { ImageElement} from '../../../Types';


type ImageElementProps = {
    imageElement: ImageElement,
    z_index: number
}

export default function Image(props: ImageElementProps) {
    const style = {
        left: props.imageElement.position.x,
        top: props.imageElement.position.y,
        width: props.imageElement.elementSize.width,
        height: props.imageElement.elementSize.height,
        zIndex: props.z_index
    }       
    return (
        <div className={elementStyles.element} style={style}>
            <img src={props.imageElement.src} alt='' style={style} />
        </div>
    );
    
}