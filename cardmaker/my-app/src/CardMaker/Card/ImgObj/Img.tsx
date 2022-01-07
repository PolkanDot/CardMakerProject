import elementStyles from '../Element.module.css';
import { ImageElement} from '../../../Types';


type ImageElementProps = {
    imageElement: ImageElement,
}

export default function Image(props: ImageElementProps, z_index: number) {
    const style = {
        left: props.imageElement.position.x,
        top: props.imageElement.position.y,
        width: props.imageElement.elementSize.width,
        height: props.imageElement.elementSize.height,
        zIndex: z_index
    }       
    return (
        <div className={elementStyles.element} style={style}>
            <img src={props.imageElement.src} style={style} />
        </div>
    );
    
}