/**
 * Создать новую карточку
 * @param {CardMaker} cardMaker - текущее состояние модели
 * @returns {CardMaker} - модель с дефолтной карточкой
 */
function createNewCard(cardMaker) { 
  return newCardMaker
}

/**
 * Удаление карточки
 * 
 * @param {CardMaker} cardMaker - текущее состояние модели
 * @returns {CardMaker} - модель с нулевой карточкой
 */
function deleteCard(cardMaker) { } 
  return newCardMaker

/**
 * Применение фильтра
 * 
 * @param {Patherns} patherns - массив всех доступных шаблонов
 * @param {Card} card - текущая карточка
 * @param {string} pathernName - имя применяемой карточки
 * @returns {CardMaker} - модель с новой карточкой (шаблоном)
 */
function usePathern(card, patherns, pathernName) {}
  return newCardMaker
/**
* Выделяение области
*
* @param {Field} field - нулевая область
* @param {Coordinates} newCoordinates - координаты области
* @param {Size} newSize - рамеры области
* @returns {CardMaker} - модель с новой областью
*/
function selectField(field, newCoordinates, newSize) {
    return newCardMaker;
}

/**
* Перемещение области
*
* @param {Field} field - область
* @param {Coordinates} newCoordinates - координаты области
* @returns {CardMaker} - модель с новыми координатами области
*/
function moveField(field, newCoordinates) {
    return newCardMaker;
}

/**
* Обрезание по выделенной области
*
* @param {Field} field - область
* @returns {CardMaker} - модель с обрезанной карточкой
*/
function cropField(field) {
    return newCardMaker;
}
/**
* Удаление выбранной области
*
* @param {Field} Field - область
* @returns {CardMaker} - изменённое приложение
*/
function deleteField(cardMaker, Field) {
    return newCardMaker;
}

/**
* Вставка текста
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {Text} text - текст
* @param {Coordinates} Coordinates - расположение
* @returns {newCardMaker} - изменённое приложение
*/
function insertText(cardMaker, text, Coordinates) {
    return newCardMaker;
}

/**
* Изменение размера текста
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {text} text - текст
* @param {size} size - размер
* @returns {newNext} - новый текст, {newCardMaker} - изменённое приложение
*/
function changeSizeText(cardMaker, text, size) {
    return newText, newCardMaker;
}

/**
* Изменение цвета текста
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {text} text - текст
* @param {color} color - цвет текста
* @returns {newNext} - новый текст, {newCardMaker} - изменённое приложение
*/
function changeColorText(cardMaker, text, color) {
    return newText, newCardMaker;
}

/**
* Перемещение текста
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {text} text - текст
* @param {Coordinates} Coordinates - расположение
* @returns {newText} - новый текст, {newCardMaker} - изменённое приложение
*/
function moveText(cardMaker, text, Coordinates) {
    return newText, newCardMaker;
}

/**
* Вставка арт-объекта
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {artObject} artObject - арт-объект
* @param {Coordinates} Coordinates - расположение
* @returns {newArt} - новый арт-объект, {newCardMaker} - изменённое приложение
*/
function insertArtObject(cardMaker, artObject, Coordinates) {
    return newArtObject, newCardMaker;
}

/**
* Перемещение арт-объекта
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {artObject} artObject - арт-объект
* @param {Coordinates} Coordinates - расположение
* @returns {newArt} - новый арт-объект, {newCardMaker} - изменённое приложение
*/
function moveArt(cardMaker, artObject, Coordinates) {
    return newArtObject, newCardMaker;
}

/**
* Изменение размера арт-объекта
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {artObject} artObject - арт-объект
* @param {size} size - размер
* @returns {newArt} - новый арт-объект, {newCardMaker} - изменённое приложение
*/
function changeSizeArt(cardMaker, artObject, size) {
    return newArtObject, newCardMaker;
}

/**
* Вставка изображения
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {image} image - изображение
* @param {Coordinates} Coordinates - расположение
* @returns {newCardMaker} - изменённое приложение
*/
function insertImage(cardMaker, image, Coordinates) {
    return newCardMaker;
}

/**
* Перемещение изображения
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {image} image - изображение
* @param {Coordinates} Coordinates - расположение
* @returns {newImage} - новое изображение, {newField} -
новая область
*/
function moveImage(cardMaker, image, Coordinates) {
    return newImage, newCardMaker;
}

/**
* Изменение размера изображения
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {image} image - изображение
* @param {size} size - размер
* @returns {newImage} - новое изображение, {newField} - новая область
*/
function changeSizeImage(cardMaker, image, size) {
    return newImage, newCardMaker;
}

/**
* Применяет фильтр к холсту
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {Field} Field - область
* @param {color} color - цвет текста
* @returns {newCardMaker} - изменённое приложение
*/
function addFilter(cardMaker, color) {
    return newCardMaker;
}

/**
* Импортировать локальное изображение
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {way} way - путь до изображения
* @returns {newCardMaker} - изменённое приложение
*/
function importImageLocale(way) {
    return newCardMaker;
}

/**
* Импортировать изображение из интернета
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {way} way - путь до изображения
* @returns {newCardMaker} - изменённое приложение
*/
function importImageNet(way) {
    return newCardMaker;
}

/**
* Увеличивает полотно до размера фотографии
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {image} image - изображение
* @returns {newCardMaker} - изменённое приложение
*/
function increaseImageFullcardMaker(image, cardMaker) {
    return newCardMaker;
}

/**
* Cохранить размер полотна, при этом вставится только часть фотографии
*
* @param {cardMaker} cardMaker - исходное приложение
* @param {image} image - изображение
* @returns {newCardMaker} - изменённое приложение
*/
function increaseImageFullcardMaker(image, cardMaker) {
    return newCardMaker;
}