const SelectedElement = null;

const ImageElement = {
  Coordinates: {
    Height: 100,
    Width: 100
  },
  Size: {
    x: 50,
    y: 50
  },
  ElementId: 0,
  ImgData: "/9j/4AAQSkZJRgABAQEBLAEsAAD / 2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgrBZf//Z"
};

const TextElement = {
  Coordinates: {
    x: 500,
    y: 100
  },
  Size: {
    Height: 30,
    Width: 100
  },
  ElementId: 1,
  TextData: "Hello World!",
  TextSize: 20,
  Font: "Arial",
  Italic: False,
  FontThickness: 0,
  Color: "000000",
  Background: null
};

const ArtElement = {
  Coordinates: {
    x: 700,
    y:300
  },
  Size: {
    Height: 100,
    Width: 100
  },
  ElementId: 2,
  ArtData: "wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgrBZf"
};

const Field = {
  Size: {
    Height: 0,
    Width: 0
  },
  Coordinates: {
    x: 0,
    y: 0
  }
};

const Background = {
  Color: 'FFFFFF',
  ImageData: null
};

const Card = {
  DisplayList: [1, 0, 2],
  Objects: [ImageElement, TextElement, ArtElement],
  Field: Field,
  Background: Background,
  Size: {
    Height: 1500,
    Width: 1000
  },
  CardName: 'New card'
};

const MakerHistory = {
  States: [Card],
  Index: 0
};

const CardMaker = {
  SelectedElements: SelectedElement,
  Patherns: [],
  Card: Card,
  MakerHisory: MakerHistory 
};