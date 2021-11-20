const ImgCoordinates = {
  x : 100,
  y : 100
};

const FieldCoordinates = {
  x: 0,
  y: 0
};

const ArtCoordinates = {
  x: 700,
  y: 300
};

const TextCoordinates = {
  x: 500,
  y: 100,
};

const ImgSize = {
  Height : 50,
  Width : 50
};

const TextSize = {
  Height: 30,
  Width: 100
};

const ArtSize = {
  Height: 100,
  Width: 100
};

const FieldSize = {
  Height: 0,
  Width: 0
};

const CardSize = {
  Height: 1500,
  Width: 1000
};

const SelectedElement = [];

const ImageElement = {
  Coordinates: ImgCoordinates,
  Size: ImgSize,
  ElementId: 0,
  ImgData: "/9j/4AAQSkZJRgABAQEBLAEsAAD / 2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgrBZf//Z"
};

const TextElement = {
  Coordinates: TextCoordinates,
  Size: TextSize,
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
  Coordinates: ArtCoordinates,
  Size: ArtSize,
  ElementId: 2,
  ArtData: "wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgrBZf"
};

const Field = {
  Size: FieldSize,
  Coordinates: FieldCoordinates
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
  Size: CardSize,
  CardName: 'New card'
};

const MakerHistory = {
  States: [Card],
  Index: 0
};

const CardMaker = {
  SelectedElements: SelectedElements,
  Patherns: [],
  Card: Card,
  MakerHisory: MakerHistory 
};