import {
    CardMaker,
    Card,
    MakerHistory,
    Field,
    ArtElement,
    TextElement,
    Background,
    ImageElement,
    SelectedElement
}
    from "./Types"

const TestSelectedElement: SelectedElement = 0

const TestBackground: Background = {
    type: 'color',
    color: "green"
};

const TestImageElement: ImageElement = {
    elementId: 1,
    position: {
        x: 100,
        y: 100
    },
    elementSize: {
        height: 300,
        width: 300
    },
    type: 'img',
    src: 'https://images.pexels.com/photos/36767/tree-natur-nightsky-cloud.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27'
};

const TestTextElement1: TextElement = {
    elementId: 3,
    position: {
        x: 500,
        y: 300
    },
    elementSize: {
        height: 100,
        width: 100
    },
    type: 'text',
    content: 'Whats up, man',
    fontFamily: 'Calibri',
    fontSize: 20,
    fontColor: '#000000',
    fontStyle: false,
    fontThickness: false,
    fontDecoration: false
};

const TestTextElement2: TextElement = {
    elementId: 4,
    position: {
        x: 500,
        y: 100
    },
    elementSize: {
        height: 100,
        width: 100
    },
    type: 'text',
    content: 'Whats up, woman',
    fontFamily: 'Arial',
    fontSize: 25,
    fontColor: 'red',
    fontStyle: true,
    fontThickness: true,
    fontDecoration: true
};

const TestArtElement: ArtElement = {
    elementId: 2,
    position: {
        x: 300,
        y: 300
    },
    elementSize: {
        height: 150,
        width: 300
    },
    type: 'art',
    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vd2ViLnJlc291cmNlLm9yZy9jYy8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgNzIwIDcyMCIgeT0iMHB4IiB2ZXJzaW9uPSIxLjEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyMCA3MjAiIHg9IjBweCI+Cgk8cGF0aCBkPSJtNDc3Ljk3IDIwNy4zMmMwIDE0LjQzNi0xMS43MSAyNi4xMzItMjYuMTMzIDI2LjEzMi0xNC40MzYgMC0yNi4xNC0xMS42OTYtMjYuMTQtMjYuMTMydi04OC43MjhjMC0xNC40MzYgMTEuNzA0LTI2LjEzMyAyNi4xNC0yNi4xMzMgMTQuNDIzIDAgMjYuMTMzIDExLjY5NyAyNi4xMzMgMjYuMTMzdjg4LjczeiIvPgoJPHBhdGggZD0ibTI4Ny4xNSAyMDcuMzJjMCAxNC40MzYtMTEuNzEgMjYuMTMyLTI2LjEzMiAyNi4xMzItMTQuNDMzIDAtMjYuMTM3LTExLjY5Ni0yNi4xMzctMjYuMTMydi04OC43MjhjMC0xNC40MzYgMTEuNzA0LTI2LjEzMyAyNi4xMzctMjYuMTMzIDE0LjQyMiAwIDI2LjEzMiAxMS42OTcgMjYuMTMyIDI2LjEzM3Y4OC43M3oiLz4KCTxwYXRoIGQ9Im0zNTAuNzYgMjIwLjA4YzAgMTQuNDM3LTExLjcwNCAyNi4xMzMtMjYuMTMzIDI2LjEzMy0xNC40MzMgMC0yNi4xMzMtMTEuNjk2LTI2LjEzMy0yNi4xMzN2LTEyNC40N2MwLTE0LjQzNyAxMS43LTI2LjEzNyAyNi4xMzMtMjYuMTM3IDE0LjQyOSAwIDI2LjEzMyAxMS43IDI2LjEzMyAyNi4xMzd2MTI0LjQ3eiIvPgoJPHBhdGggZD0ibTQxNC4zNyAyMjAuMDhjMCAxNC40MzctMTEuNzExIDI2LjEzMy0yNi4xNCAyNi4xMzMtMTQuNDMgMC0yNi4xMzMtMTEuNjk2LTI2LjEzMy0yNi4xMzN2LTEyNC40N2MwLTE0LjQzNyAxMS43MDMtMjYuMTM3IDI2LjEzMy0yNi4xMzcgMTQuNDI5IDAgMjYuMTQgMTEuNyAyNi4xNCAyNi4xMzd2MTI0LjQ3eiIvPgoJPHBhdGggZD0ibTQ5Ny41NyA1ODEuNThoLTE0My4wN2wwLjAxNC0xMS42NmgxMzguOThsLTIwLjcyNS01OS42MDVoLTExOC4xN2wwLjAxNC0xMS42NjhoMTE0LjExbC0xOS4zMjktNTUuNTkyLTk0LjcxNiAwLjQwMSAwLjAxNS0xMC45MDJoOTEuMDQ2bC0xMy4wNzgtMzcuNTc5aC0xNjkuODFjLTkgMzAuMDE4LTM3Ljc3MiAxMzAuMTgtNTUuMTQxIDIzOS4zMiAwIDAgMTI2LjY2IDQ2LjczNSAxNDYuNzktMzIuNDc4bDAuMDA3LTMuNzdjNi43NTMgMTkuMDE0IDIyLjU1NiA0OC4zMDkgNTguNDM4IDYzLjg2MSA0OS40MzkgMjEuNDEgMTAwLjM5IDEuNjgxIDExMS40OC0zLjE0OGwtMjYuODUtNzcuMTh6Ii8+Cgk8cGF0aCBkPSJtNDU5LjU0IDI0Ny40NmMtMjAuMTY3LTIuNjA0LTQyLjYzNy0wLjQwMS02Mi4xNDUgMTMuODcxLTE4Ljk1OCAxMy44NzEtMjkuMzE2IDMxLjkyLTM0Ljg5IDQ4Ljk5Ni0wLjUxNS0yLjQxOC0xLjA1Mi00Ljg1Ny0xLjczOC03LjQ4My0yMC43NDYtNzkuMzYzLTEwNy40My0xMTQuNzctMTA3LjQzLTExNC43N2wtMzEuNzQ5IDU2LjE2NCAzNy43NjkgMTA5Ljg4aDE3NC4zbDgzLjM5Mi04Ni42ODIgMi40MzktMTI0LjUzYy0wLjAyLTAuMDEtNjIuNzggMTMuMDktNTkuOTYgMTA0LjU1eiIvPgo8bWV0YWRhdGE+PHJkZjpSREY+PGNjOldvcms+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPjxjYzpsaWNlbnNlIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvcHVibGljZG9tYWluLyIvPjxkYzpwdWJsaXNoZXI+PGNjOkFnZW50IHJkZjphYm91dD0iaHR0cDovL29wZW5jbGlwYXJ0Lm9yZy8iPjxkYzp0aXRsZT5PcGVuY2xpcGFydDwvZGM6dGl0bGU+PC9jYzpBZ2VudD48L2RjOnB1Ymxpc2hlcj48ZGM6dGl0bGU+R2F1bnRsZXQ8L2RjOnRpdGxlPjxkYzpkYXRlPjIwMTAtMDctMTlUMjE6NDQ6MTM8L2RjOmRhdGU+PGRjOmRlc2NyaXB0aW9uPlNpbXBsaWZpZWQgaWxsdXN0cmF0aW9uIG9mIGEgZ2F1bnRsZXQgYmFzZWQgb24gYW4gYW5jaWVudCBjb2F0IG9mIGFybXMuPC9kYzpkZXNjcmlwdGlvbj48ZGM6c291cmNlPmh0dHA6Ly9vcGVuY2xpcGFydC5vcmcvZGV0YWlsLzczODc5L2dhdW50bGV0LWJ5LWpnbTEwNDwvZGM6c291cmNlPjxkYzpjcmVhdG9yPjxjYzpBZ2VudD48ZGM6dGl0bGU+amdtMTA0PC9kYzp0aXRsZT48L2NjOkFnZW50PjwvZGM6Y3JlYXRvcj48ZGM6c3ViamVjdD48cmRmOkJhZz48cmRmOmxpPmJhdHRsZTwvcmRmOmxpPjxyZGY6bGk+Y2xpcCBhcnQ8L3JkZjpsaT48cmRmOmxpPmNsaXBhcnQ8L3JkZjpsaT48cmRmOmxpPmRlZmVuc2U8L3JkZjpsaT48cmRmOmxpPm1pbGl0YXJ5PC9yZGY6bGk+PHJkZjpsaT5zaGllbGQ8L3JkZjpsaT48cmRmOmxpPndhcjwvcmRmOmxpPjwvcmRmOkJhZz48L2RjOnN1YmplY3Q+PC9jYzpXb3JrPjxjYzpMaWNlbnNlIHJkZjphYm91dD0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvcHVibGljZG9tYWluLyI+PGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNSZXByb2R1Y3Rpb24iLz48Y2M6cGVybWl0cyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rpc3RyaWJ1dGlvbiIvPjxjYzpwZXJtaXRzIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjRGVyaXZhdGl2ZVdvcmtzIi8+PC9jYzpMaWNlbnNlPjwvcmRmOlJERj48L21ldGFkYXRhPjwvc3ZnPgo=",
};

const TestField: Field = {
    position: {
        x: 0,
        y: 0
    },
    fieldSize: {
        height: 0,
        width: 0
    },
};

export const TestCard: Card = {
    displayList: [1, 3, 4, 2],
    objects: [TestTextElement1, TestTextElement2, TestImageElement, TestArtElement],
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

export const TestCardMaker: CardMaker = {
    selectedElement: TestSelectedElement,
    patherns: [],
    card: TestCard,
    makerHistory: TestMakerHistory
};