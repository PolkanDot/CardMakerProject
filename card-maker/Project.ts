type Area = {
	readonly Size: [number, number],
    readonly Coordinates: [integre, integer]
}
type Text = {
	readonly Size: [integer, integer],
    readonly Color: string,
    readonly Coordinates: [integer, integer],
    readonly BgColor: string,
    readonly Letters: string
}
type Art = {
	readonly Size: [integer, integer],
    readonly Color: string, 
    readonly Coordinates: [integer, integer],
    readonly DrowingData: string // Формат кодировки base64
}
type Image = {
    readonly Size: [integer, integer],
    readonly Coordinates: [integer, integer],
    readonly Picture: string // Формат кодировки base64
}
type CardObject = {
	readonly Images[]: Image,
	readonly Arts[]: Art,
	readonly Texts[]: Text,
	readonly DisplayList: Id[],
    readonly Area: AreaZone,
    readonly Size: [integer, integer]
    readonly Color: string
}	
type CardMaker = {
	readonly Card: CardObject,
	readonly Title: string,
	readonly Command History:,
	readonly SelectObjects: Id[],
	readonly Patherns: CardObject[],
    readonly Filters[]: Filter
}

