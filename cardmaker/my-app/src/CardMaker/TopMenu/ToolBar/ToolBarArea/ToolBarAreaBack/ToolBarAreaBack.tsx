import gStyle from '../TollBarArea.module.css'
import style from "./ToolBarAreaBack.module.css"

export default function FunToolBarBackArea() {
    return (
        <div className={gStyle.toolbar__area + ' ' + style.toolbar__area}>

            <h2 className={gStyle.toolbar_label}>Фон</h2>
        </div>
    )
}