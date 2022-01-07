import gStyle from '../TollBarArea.module.css'
import style from './ToolBarImgArea.module.css'
import file_image from '../../../../../icons/work_icons/file-image.svg'

export default function ToolBarImgArea() {
    return (
        <div className={gStyle.toolbar__area}>
            <div className={gStyle.row}>
                <span>С устройства</span>
                <label className={style.comp_label} htmlFor='comp_img'>
                    <img className={gStyle.botton__img} src={file_image} alt="" />
                </label>
                <input className={style.input} type="file" id='comp_img' ></input>
            </div>
            <div className={gStyle.row}>
                <span>Из интернета</span>
                <input className={style.url} type="url" placeholder="http://"></input>
            </div>
            <h2 className={gStyle.toolbar_label}>Вставить изображение</h2>
        </div>
    )
}