import elementStyles from '../Element.module.css';
import {ArtElement} from '../../../Types';


type ArtElementProps = {
    artElement: ArtElement,
    z_index: number
}

export default function Art(props: ArtElementProps) {
    const style = {
        left: props.artElement.position.x,
        top: props.artElement.position.y,
        width: props.artElement.elementSize.width,
        height: props.artElement.elementSize.height,
        zIndex: props.z_index
    }
    return (
        <div className={elementStyles.element} style={style} >
            <img src={props.artElement.src} alt='' style={style} />
        </div>
    );
}