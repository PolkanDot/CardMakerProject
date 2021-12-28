import style from './ToolBar.module.css'
import FunToolBarTextArea from './ToolBarArea/ToolBarAreaText/ToolBarTextArea'
import FunToolBarImgArea from './ToolBarArea/ToolBarAreaImage/ToolBarImgArea'
import FunToolBarArtArea from './ToolBarArea/ToolBarAreaArt/ToolBarArtArea'
import FunToolBarObjectArea from './ToolBarArea/ToolBarAreaObject/ToolBarAreaObject'
import FunToolBarCanvasArea from './ToolBarArea/ToolBarAreaCanvas/ToolBarAreaCanvas'
import FunToolBarBackArea from './ToolBarArea/ToolBarAreaBack/ToolBarAreaBack'

export default function FunToolBar() {
    return (
        <div className={style.toolbar}>
            <FunToolBarTextArea />  
            <FunToolBarImgArea />
            <FunToolBarArtArea />
            <FunToolBarObjectArea/>
            <FunToolBarCanvasArea/>
            <FunToolBarBackArea/>
        </div>
    )
}    