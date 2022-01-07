import elementStyles from '../Element.module.css';
import {TextElement} from '../../../Types';
import { isAbsolute } from 'path/posix';

type TextElementProps = {
    textElement: TextElement,
}

export default function Text(props: TextElementProps, z_index: number) {
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
        zIndex: z_index
    }

        return (
            <div className={elementStyles.element} style={divStyle}>
                <span style={style}>{props.textElement.content}</span>
            </div>
        );       
}