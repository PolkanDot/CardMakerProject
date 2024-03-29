import elementStyles from '../Element.module.css';
import {TextElement} from '../../../Types';

type TextElementProps = {
    textElement: TextElement, 
    z_index: number
}

export default function Text(props: TextElementProps) {
    const style = {
        width: props.textElement.elementSize.width,
        heigth: props.textElement.elementSize.height,
        color: props.textElement.fontColor,
        fontSize: props.textElement.fontSize,
        fontWeight: props.textElement.fontThickness ? 700 : 400,
        textDecoration: props.textElement.fontDecoration ? 'underline' : 'none',
        fontStyle: props.textElement.fontStyle ? 'italic' : 'normal',
        fontFamily: props.textElement.fontFamily
    }
    const divStyle = {
        left: props.textElement.position.x,
        top: props.textElement.position.y,
        width: props.textElement.elementSize.width,
        heigth: props.textElement.elementSize.height,
        zIndex: props.z_index
    }

        return (
            <div className={elementStyles.element} style={divStyle}>
                <span style={style}>{props.textElement.content}</span>
            </div>
        );       
}