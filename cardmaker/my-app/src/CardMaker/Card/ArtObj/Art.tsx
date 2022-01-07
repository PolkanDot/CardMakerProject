import elementStyles from '../Element.module.css';
import {ArtElement} from '../../../Types';


type ArtElementProps = {
    artElement: ArtElement,
}

export default function Art(props: ArtElementProps, z_index: number) {
    const style = {
        left: props.artElement.position.x,
        top: props.artElement.position.y,
        width: props.artElement.elementSize.width,
        height: props.artElement.elementSize.height,
        zIndex: z_index
    }
    return (
        <div className={elementStyles.element} style={style} >
            <img src={props.artElement.src} style={style} />
        </div>
    );
}