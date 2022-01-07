import style from './ToolBar.module.css'
import ToolBarTextArea from './ToolBarArea/ToolBarAreaText/ToolBarTextArea'
import ToolBarImgArea from './ToolBarArea/ToolBarAreaImage/ToolBarImgArea'
import ToolBarArtArea from './ToolBarArea/ToolBarAreaArt/ToolBarArtArea'
import ToolBarObjectArea from './ToolBarArea/ToolBarAreaObject/ToolBarAreaObject'
import ToolBarCanvasArea from './ToolBarArea/ToolBarAreaCanvas/ToolBarAreaCanvas'
import ToolBarBackArea from './ToolBarArea/ToolBarAreaBack/ToolBarAreaBack'

export default function ToolBar() {
    return (
        <div className={style.toolbar}>
            <ToolBarTextArea />  
            <ToolBarImgArea />
            <ToolBarArtArea />
            <ToolBarObjectArea />
            <ToolBarCanvasArea/>
            <ToolBarBackArea/>
        </div>
    )
}    