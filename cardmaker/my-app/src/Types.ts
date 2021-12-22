export type Coordinates = {
    readonly x: number,
    readonly y: number
};

export type Size = {
    readonly width: number,
    readonly height: number
};

export type SelectedElement = number;

export type ImageElement = {
    readonly type: 'img',
    readonly src: string
} & BaseElement;

export type Background = {
    readonly color: string
} | {
    readonly src: string
};

export type BaseElement ={
    readonly elementId: number,
    readonly position: Coordinates,
    readonly elementSize: Size,
}

export type Element = TextElement | ImageElement | ArtElement

export type TextElement = {
    readonly type: 'text',
    readonly content: string,
    readonly fontFamily: string,
    readonly fontSize: number,
    readonly fontColor: string,
    readonly fontStyle: boolean,
    readonly fontThickness: boolean,
    readonly fontDecoration: boolean
} & BaseElement; 

export type ArtElement = {
    readonly type: 'art',
    readonly src: string 
} & BaseElement;

export type Field = {
    readonly position: Coordinates,
    readonly fieldSize: Size
};

export type Card = {
    readonly displayList: number[],
    readonly objects: Element[],
    readonly field: Field,
    readonly background: Background,
    readonly cardSize: Size,
    readonly cardName: string
};

export type MakerHistory = {
    readonly states: Card[],
    readonly index: number
};

export type CardMaker = {
    readonly selectedElement: SelectedElement,
    readonly patherns: Card[],
    readonly card: Card,
    readonly makerHistory: MakerHistory
};