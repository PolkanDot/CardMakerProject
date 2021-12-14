export type Coordinates = {
    x: number,
    y: number
};

export type Size = {
    width: number,
    height: number
};

export type SelectedElement = number;

export type ImageElement = {
    type: 'img',
    src: string
};

export type Background = {
    color: string
} | {
    src: string
};

export type Element = {
    elementId: number,
    position: Coordinates,
    elementSize: Size,
    content: TextElement | ImageElement | ArtElement,
};

export type TextElement = {
    type: 'text',
    content: string,
    fontFamily: string,
    fontSize: number,
    fontColor: string,
    fontStyle: boolean,
    fontThickness: boolean,
    fontDecoration: boolean
}; 

export type ArtElement = {
    type: 'art',
    src: string 
};

export type Field = {
    position: Coordinates,
    elementSize: Size
};

export type Card = {
    displayList: number[],
    objects: Element[],
    field: Field,
    background: Background,
    cardSize: Size,
    cardName: string
};

export type MakerHistory = {
    states: Card[],
    index: number
};

export type CardMaker = {
    selectedElement: SelectedElement,
    patherns: Card[],
    card: Card,
    makerHistory: MakerHistory
};