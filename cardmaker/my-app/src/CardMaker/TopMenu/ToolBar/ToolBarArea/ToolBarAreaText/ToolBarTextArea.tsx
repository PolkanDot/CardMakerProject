import gStyle from '../TollBarArea.module.css'
import style from './ToolBarAreaText.module.css'
import bold from '../../../../../icons/work_icons/bold.svg'
import italic from '../../../../../icons/work_icons/italic.svg'
import underline from '../../../../../icons/work_icons/underline.svg'

export default function ToolBarTextArea() {
    return (
        <div className={gStyle.toolbar__area}>
            <div className={gStyle.row}>
                <select name="" id="" className={style.toolbar__text_fontfamily}>
                    <option value="">Calibri</option>
                    <option value="">Arial</option>
                </select>

                <select name="" id="" className={style.toolbar__text_fontsize}>
                    <option value="">14</option>
                    <option value="">16</option>
                </select>
            </div>
            <div className={gStyle.row}>
                <button className={style.toolbar__text_button} >
                    <img className={gStyle.botton__img} src={bold} alt="" />
                </button>
                <button className={style.toolbar__text_button}>
                    <img className={gStyle.botton__img} src={italic} alt="" />
                </button>
                <button className={style.toolbar__text_button}>
                    <img className={gStyle.botton__img} src={underline} alt="" />
                </button>
                <input type="color" className={style.toolbar__text_button} />
            </div>
            <h2 className={gStyle.toolbar_label}>Текст</h2>
        </div>
    )
}
