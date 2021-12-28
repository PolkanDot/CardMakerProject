import style from '../TollBarArea.module.css'

export default function FunToolBarTextArea() {
    return (
        <div className={style.toolbar__area}>
            <div className={style.row}>
                <select name="" id="" className={style.toolbar__text_fontfamily}>
                    <option value="">Calibri</option>
                    <option value="">Arial</option>
                </select>

                <select name="" id="" className={style.toolbar__text_fontsize}>
                    <option value="">14</option>
                    <option value="">16</option>
                </select>
            </div>
            <div className={style.row}>
                <button className={style.toolbar__text_button + ' ' + style.bold} >
                </button>
                <button className={style.toolbar__text_button + ' ' + style.italic}>
                </button>
                <button className={style.toolbar__text_button + ' ' + style.underline}>
                </button>
                <button className={style.toolbar__text_button + ' ' + style.crossed_out}>
                </button>
                <input type="color" className={style.toolbar__text_button} />
            </div>
            <h2 className={style.toolbar_label}>Текст</h2>
        </div>
    )
}
