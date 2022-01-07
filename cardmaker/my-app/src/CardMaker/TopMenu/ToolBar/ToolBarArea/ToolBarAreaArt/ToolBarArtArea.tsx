import gStyle from '../TollBarArea.module.css'
import style from './ToolBarArtArea.module.css'
import candy from '../../../../../icons/creating_icons/candy.svg'
import claus_santa from '../../../../../icons/creating_icons/claus-santa.svg'
import postbox from '../../../../../icons/creating_icons/postbox.svg'
import thermometer from '../../../../../icons/creating_icons/thermometer.svg'
export default function ToolBarArtArea() {
    return (
        <div className={gStyle.toolbar__area}>
            <div className={gStyle.row}>
                <button className={style.tool_bar__art__default_art_button}>
                    <img className={style.tool_bar__art__default_art} src={candy} alt="" />
                </button>
                <button className={style.tool_bar__art__default_art_button}>
                    <img className={style.tool_bar__art__default_art} src={claus_santa} alt="" />
                </button>
                <button className={style.tool_bar__art__default_art_button}>
                    <img className={style.tool_bar__art__default_art} src={postbox} alt="" />
                </button>
                <button className={style.tool_bar__art__default_art_button}>
                    <img className={style.tool_bar__art__default_art} src={thermometer} alt="" />
                </button>
            </div>
            <button className={gStyle.toolbar_label}>Больше</button>
            <h2 className={gStyle.toolbar_label}>Вставить арт-объект</h2> 
        </div>
    )
}