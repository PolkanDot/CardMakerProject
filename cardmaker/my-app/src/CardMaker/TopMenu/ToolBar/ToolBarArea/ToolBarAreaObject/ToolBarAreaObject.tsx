import gStyle from '../TollBarArea.module.css'
import style from './ToolBarAreaObject.module.css'
import deletebox from '../../../../../icons/work_icons/delete.svg'
import up from '../../../../../icons/work_icons/up.svg'
import down from '../../../../../icons/work_icons/down.svg'

export default function ToolBarObjectArea() {
    return (
        <div className={gStyle.toolbar__area}>
            <div className={style.toolbar__area}>
                <div className={style.size_object_area}>
                    <span className={style.size_object_span}>Ширина</span>
                    <input className={style.size_object_input}  type="url" placeholder="100"></input>
                    <span className={style.size_object_span}>Высота</span>
                    <input className={style.size_object_input} type="url" placeholder="100"></input>
                </div>
                <div className={style.delete_object_area}>
                    <button className={style.delete_object__button}>
                        <img className={gStyle.botton__img} src={deletebox} alt="" />
                    </button>
                    <div className={style.choose_area}>
                        <button className={style.choose_object__button}>
                            <img className={gStyle.botton__img} src={up} alt="" />
                        </button>
                        <button className={style.choose_object__button}>
                            <img className={gStyle.botton__img} src={down} alt="" />
                        </button>
                    </div>
                </div>    
            </div>
            <h2 className={gStyle.toolbar_label}>Работа с объектами</h2>
        </div>
    )
}