import elementStyles from '../Element.module.css';
import {TextElement} from '../../../Types';

type TextElementProps = {
    textElement: TextElement,
}

function FunText(props: TextElementProps) {
    const style = {
        left: props.textElement.position.x,
        top: props.textElement.position.y,
        width: props.textElement.elementSize.width,
        heigth: props.textElement.elementSize.height,
        color: props.textElement.fontColor,
        fontSize: props.textElement.fontSize,
        fontWeight: props.textElement.fontThickness ? 700 : 400,
        textDecoration: props.textElement.fontDecoration ? 'underline' : 'none',
        fontStyle: props.textElement.fontStyle ? 'italic' : 'normal',
        fontFamily: props.textElement.fontFamily
    }

        return (
            <span className={elementStyles.element} style={style}>{props.textElement.content}</span>
        );       
}

export default FunText;