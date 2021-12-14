import './CardMaker.css';

function App() {
  return (
    <><Top_menu /><Work_zone /></>
  );
}

function Top_menu() {
  return (
    <header class="header">
      <div class="panel">
        <nav class="navbar">
          <button class="navbar__button">
            Новая
          </button>
          <button class="navbar__button">
            Сохранить как
          </button>
          <button class="navbar__button">
            Загрузить шаблон
          </button>
        </nav>

        <div class="toolbar">
          <div class="toolbar__text">
            <div class="row">
              <select name="" id="" class="toolbar__text_font-family">
                <option value="">Calibri</option>
                <option value="">Arial</option>
              </select>

              <select name="" id="" class="toolbar__text_font-size">
                <option value="">14</option>
                <option value="">16</option>
              </select>
            </div>
            <div class="row">
              <button class="toolbar__text_button bold">
              </button>
              <button class="toolbar__text_button italic">
              </button>
              <button class="toolbar__text_button underline">
              </button>
              <button class="toolbar__text_button crossed-out">
              </button>
              <input type="color" class="toolbar__text_button" />
            </div>
            <h2 class="toolbar-label">Текст</h2>
          </div>

          <div class="toolbar__img">
            <button class="toolbar__img_button">C компьютера
            </button>
            <button class="toolbar__img_button">
              Из Pixels
            </button>
            <h2 class="toolbar-label">Изображение</h2>
          </div>

          <div class="toolbar__art-obj">Тут арт-объекты</div>
          <div class="toolbar__art-obj">Тут обьекты</div>
          <div class="toolbar__art-obj">Тут холст Нужна область лоя названия карточки</div>
        </div>
      </div>
    </header>
  );
}

function Work_zone() {
  return (
    <main class="main">
      <div id="" class="canvas"></div>
    </main>
  );
}

export default App;
