import { Coordinates, Size, Element, ImageElement, TextElement, ArtElement, Field, Background, Card, MakerHistory, CardMaker } from './Types';

function createCard(cardMaker: CardMaker): CardMaker{
    const defaultCardSize: Size = {
        width: 600,
        height: 800
    }

    const defaultCardBackground: Background = {
        color: '#ffffff'
    }

    const zeroField: Field = {
        position: {
            x: 0,
            y: 0
        },
        elementSize: {
            width: 0,
            height: 0
        }
    }

    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            cardSize: defaultCardSize,
            displayList: [],
            objects: [],
            field: zeroField,
            background: defaultCardBackground,
            cardName: 'New card'
        }
    }
}

function changeCardName(cardMaker: CardMaker, newCardName: string): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            cardName: newCardName
        }
    }
}
function changeCardSize(cardMaker: CardMaker, newSize: Size): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            cardSize: newSize,
        }
    }
}

function changeBackgroundColor(cardMaker: CardMaker, newColor: string): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            background: {
                color: newColor
            }
        }
    }
}

function changeBackgroundImage(cardMaker: CardMaker, newSrc: string): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            background: {
                src: newSrc
            }
        }
    }
}

function createText(cardMaker: CardMaker, newId: number): CardMaker {
    const textElement: TextElement = {
        type: 'text',
        content: '',
        font: 'colibri',
        fontSize: 15,
        fontColor: '000000',
        fontStyle: false,
        fontThickness: 1
    }
    const newElement: Element = {
        elementId: newId,
        position: {
            x: cardMaker.card.cardSize.width / 2,
            y: cardMaker.card.cardSize.height / 2
        },
        elementSize: {
            width: 150,
            height: 50
        },
        content: textElement
    }    
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: [
                ...cardMaker.card.objects, newElement                
            ]
        }
    }
}

function changeElementSize(cardMaker: CardMaker, elementId: number, newSize: Size): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId) {
                    return {
                        ...element,
                        size: newSize,
                    }
                }
                return { ...element }
            })
        }
    }
}

function changeColorText(cardMaker: CardMaker, elementId: number, newColor: string) {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId && element.content.type == 'text') {
                    return {
                        ...element,
                        color: newColor
                    }
                }
                return { ...element }
            })
        }
    }
}

function setTextItalic(cardMaker: CardMaker, elementId: number, newSet: boolean) {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId && element.content.type == 'text') {
                    return {
                        ...element,
                        italic: newSet 
                    }
                }
                return { ...element }
            })
        }
    }
}

function setTextThickness(cardMaker: CardMaker, elementId: number, newFontTricness: number) {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId && element.content.type == 'text') {
                    return {
                        ...element,
                        fontTricness: newFontTricness
                    }
                }
                return { ...element }
            })
        }
    }
}

function changeFontSize(cardMaker: CardMaker, elementId: number, newFontSize: number) {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId && element.content.type == 'text') {
                    return {
                        ...element,
                        fontTricness: newFontSize
                    }
                }
                return { ...element }
            })
        }
    }
}

function changeTextFont(cardMaker: CardMaker, elementId: number, newFont: string) {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId && element.content.type == 'text') {
                    return {
                        ...element,
                        font: newFont
                    }
                }
                return { ...element }
            })
        }
    }
}

function moveElement(cardMaker: CardMaker, elementId: number, newPosition: Coordinates): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: cardMaker.card.objects.map(element => {
                if (elementId == element.elementId) {
                    return {
                        ...element,
                        position: newPosition,
                    }
                }
                return { ...element }
            })
        }
    }
}

function createImage(cardMaker: CardMaker, newId: number, newSrc: string, newSize: Size): CardMaker {
    const newImageElement: ImageElement = {
        type: 'img',
        src: newSrc
    };
    const newElement: Element = {
        elementId: newId,
        position: {
            x: cardMaker.card.cardSize.height / 2,
            y: cardMaker.card.cardSize.width / 2
        },
        elementSize: newSize,
        content: newImageElement
    }    
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: [
                ...cardMaker.card.objects, newElement                
            ]
        }
    }
}

function createArtObject(cardMaker: CardMaker, newId: number, newSrc: string, newSize: Size): CardMaker {
    const newArtElement: ArtElement = {
        type: 'art',
        src: newSrc
    };
    const newElement: Element = {
        elementId: newId,
        position: {
            x: cardMaker.card.cardSize.height / 2,
            y: cardMaker.card.cardSize.width / 2
        },
        elementSize: newSize,
        content: newArtElement
    }
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            objects: [
                ...cardMaker.card.objects, newElement
            ]
        }
    }
}

function selectObject(cardMaker: CardMaker, newId: number): CardMaker {
    return {
        ...cardMaker,
        selectedElement: newId,
    }
}

function selectArea(cardMaker: CardMaker, newPosition: Coordinates, newSize: Size): CardMaker {
    return {
        ...cardMaker,
        card: {
            ...cardMaker.card,
            field: {
                position: newPosition,
                elementSize: newSize
            }
        }
    }
}

function addHistory(cardMaker: CardMaker, card: Card): CardMaker {
    let newstates = [...cardMaker.makerHistory.states];
    let index = cardMaker.makerHistory.index
    if (index !== cardMaker.makerHistory.states.length) {
        newstates = newstates.slice(0, index)
    }
    newstates.push(card);
    return {
        ...cardMaker,
        makerHistory: {
            states: newstates,
            index: index + 1,
        }
    }
}

function undo(cardMaker: CardMaker): CardMaker {
    return {
        ...cardMaker,
        makerHistory: {
            ...cardMaker.makerHistory,
            index: cardMaker.makerHistory.index - 1,
        }
    }
}

function redo(cardMaker: CardMaker): CardMaker {
    return {
        ...cardMaker,
        makerHisory: {
            ...cardMaker.makerHisory,
            index: cardMaker.makerHisory.index + 1,
        }
    }
}