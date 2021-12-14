import './CardMaker.css';

function App() {
  return (
    <><Top_menu /><Work_zone /></>
  );
}

function Top_menu() {
  return (
    <header className="header">
      <div className="panel">
        <nav className="navbar">
          <button className="navbar__button">
            Новая
          </button>
          <button className="navbar__button">
            Сохранить как
          </button>
          <button className="navbar__button">
            Загрузить шаблон
          </button>
        </nav>

        <div className="toolbar">
          <div className="toolbar__text">
            <div className="row">
              <select name="" id="" className="toolbar__text_font-family">
                <option value="">Calibri</option>
                <option value="">Arial</option>
              </select>

              <select name="" id="" className="toolbar__text_font-size">
                <option value="">14</option>
                <option value="">16</option>
              </select>
            </div>
            <div className="row">
              <button className="toolbar__text_button bold">
              </button>
              <button className="toolbar__text_button italic">
              </button>
              <button className="toolbar__text_button underline">
              </button>
              <button className="toolbar__text_button crossed-out">
              </button>
              <input type="color" className="toolbar__text_button" />
            </div>
            <h2 className="toolbar-label">Текст</h2>
          </div>

          <div className="toolbar__img">
            <button className="toolbar__img_button">C компьютера
            </button>
            <button className="toolbar__img_button">
              Из Pixels
            </button>
            <h2 className="toolbar-label">Изображение</h2>
          </div>

          <div className="toolbar__art-obj">Тут арт-объекты</div>
          <div className="toolbar__art-obj">Тут обьекты</div>
          <div className="toolbar__art-obj">Тут холст Нужна область лоя названия карточки</div>
        </div>
      </div>
    </header>
  );
}

function Work_zone() {
  return (
    <main className="main">
      <div id="" className="canvas"></div>
    </main>
  );
}

export default App;
