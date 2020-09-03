import fabric from 'fabric';

class Snake {
    defaultValue: any = {}

    constructor(canvas: fabric.fabric.Canvas, boxWidth: number, cWidth: number) {
        this.defaultValue = {
            snakeHead: {
                width: boxWidth,
                height: boxWidth,
                top: Math.floor(cWidth / boxWidth / 2) * boxWidth,
                left: boxWidth * 4,
                selectable: false,
                fill: '#cd3e0f'
            },
            snakeBody: [
                {
                    width: boxWidth,
                    height: boxWidth,
                    top: Math.floor(cWidth / boxWidth / 2) * boxWidth,
                    left: boxWidth * 3,
                    selectable: false,
                    fill: '#fff'
                },
                {
                    width: boxWidth,
                    height: boxWidth,
                    top: Math.floor(cWidth / boxWidth / 2) * boxWidth,
                    left: boxWidth * 2,
                    selectable: false,
                    fill: '#fff'
                }
            ]
        }

        const snakeHead = new fabric.fabric.Rect(this.defaultValue.snakeHead);
        canvas.add(snakeHead);
        this.defaultValue.snakeBody.forEach((element: any) => {
            const bodyElement = new fabric.fabric.Rect(element);
            canvas.add(bodyElement);
        })
        canvas.renderAll();
    }
}