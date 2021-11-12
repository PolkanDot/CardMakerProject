const ImgCoordinates = {
  x : 100,
  y : 100
};

const FieldCoordinates = {
  x: 0,
  y: 0
};

const ImgSize = {
  Height : 50,
  Width : 50
};

const FieldSize = {
  Height: 0,
  Width: 0
};

const CardSize = {
  Height = 1500,
  Width = 1000
}

const SelectedElements = [];

const States = [Card]

const ImageObj = {
  Coordinates = Coordinates,
  Size = Size,
  ElementId = 0,
  ImgData = "/9j/4AAQSkZJRgABAQEBLAEsAAD / 2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgrBZf//Z"
};

const Field = {
  Size = FieldSize,
  Coordinates = FieldCoordinates
};

const Background = {
  Color = 'FFFFFF',
  ImageData = Nil
};

const Card = {
  DisplayList = [0],
  Objects = [ImageObj],
  Field = Field,
  Background = Background,
  Size = CardSize,
  CardName = 'New card'
};