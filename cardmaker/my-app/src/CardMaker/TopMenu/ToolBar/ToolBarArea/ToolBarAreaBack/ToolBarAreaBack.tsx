import gStyle from '../TollBarArea.module.css'
import style from "./ToolBarAreaBack.module.css"
import file_image from '../../../../../icons/work_icons/file-image.svg'

export default function ToolBarBackArea() {
    return (
        <div className={style.toolbar__area}>
            <div className={style.toolbar__back_area}>
                <div className={style.toolbar__area_image}>
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
                </div>
                <div className={style.delete_object_area}>
                    <input type="color" className={style.toolbar__text_button} />               
                </div>
            </div>
            <h2 className={gStyle.toolbar_label}>Фон</h2>
        </div>
    )
}