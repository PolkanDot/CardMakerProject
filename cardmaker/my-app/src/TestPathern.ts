import {
    CardMaker,
    Card,
    MakerHistory,
    Field,
    ArtElement,
    TextElement,
    Element,
    Background,
    ImageElement,
    SelectedElement
}
    from "./Types"

const TestSelectedElement: SelectedElement = 0

const TestBackground: Background = {
    color: "#FFFFFF"
};

const TestImageElement: ImageElement = {
    type: 'img',
    src: './pictures/nature.jpg'
};

const TestTextElement: TextElement = {
    type: 'text',
    content: 'Whats up, man',
    fontFamily: 'Calibri',
    fontSize: 20,
    fontColor: '#000000',
    fontStyle: false,
    fontThickness: false,
    fontDecoration: false
};

const TestArtElement: ArtElement = {
    type: 'art',
    src: './icons/talk.png'
};

const TestField: Field = {
    position: {
        x: 0,
        y: 0
    },
    elementSize: {
        height: 0,
        width: 0
    },
};

const Element1: Element = {
    elementId: 1,
    position: {
        x: 500,
        y: 500
    },
    elementSize: {
        height: 300,
        width: 300
    },
    content: TestImageElement
};

const Element2: Element = {
    elementId: 2,
    position: {
        x: 300,
        y: 300
    },
    elementSize: {
        height: 113,
        width: 300
    },
    content: TestArtElement
};

const Element3: Element = {
    elementId: 3,
    position: {
        x: 500,
        y: 500
    },
    elementSize: {
        height: 100,
        width: 100
    },
    content: TestTextElement
};

const TestCard: Card = {
    displayList: [1, 2, 3],
    objects: [Element1, Element2, Element3],
    field: TestField,
    background: TestBackground,
    cardSize: {
        height: 500,
        width: 800
    },
    cardName: 'TestCard'
};

const TestMakerHistory: MakerHistory = {
    states: [TestCard],
    index: 0
};

const TestCardMaker: CardMaker = {
    selectedElement: TestSelectedElement,
    patherns: [],
    card: TestCard,
    makerHistory: TestMakerHistory
};