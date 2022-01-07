import gStyle from '../TollBarArea.module.css'
import style from './ToolBarAreaCanvas.module.css'

export default function ToolBarCanvasArea() {
    return (
        <div className={gStyle.toolbar__area}>
            <div className={style.size_canvas_area}>
                <span className={style.size_canvas_span}>Ширина</span>
                <input className={style.size_canvas_input} type="url" placeholder="100"></input>
                <span className={style.size_canvas_span}>Высота</span>
                <input className={style.size_canvas_input} type="url" placeholder="100"></input>
            </div>
            <h2 className={gStyle.toolbar_label}>Холст</h2>
        </div>
    )
}