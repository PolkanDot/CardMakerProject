import elementStyles from '../Element.module.css';
import { Element, TextElement  } from '../../../Types';

type TextElementProps = {
    textElement: Element,
}

function TextElement(props: TextElementProps) {
    if (props.textElement.content.type == 'text') {
        const style = {
            left: props.textElement.position.x,
            top: props.textElement.position.y,
            width: props.textElement.elementSize.width,
            heigth: props.textElement.elementSize.height,
            color: props.textElement.content.fontColor,
            fontSize: props.textElement.content.fontSize,
            fontWeight: props.textElement.content.fontThickness ? 700 : 400,
            textDecoration: props.textElement.content.fontDecoration ? 'underline' : 'none',
            fontStyle: props.textElement.content.fontStyle ? 'italic' : 'normal',
            fontFamily: props.textElement.content.fontFamily
        } 
}
    return (
        <span className={elementStyles.Element} style={style}>{props.textElement.text}</span>
    );
}

export default TextElement;