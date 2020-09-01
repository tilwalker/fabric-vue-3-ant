import fabric from 'fabric';

export default class Rain {
    defaultValue = [];

    constructor(canvas: fabric.fabric.Canvas, boxWidth: number, cWidth: number, cHeight: number) {
        const rain = {
            width: boxWidth,
            height: boxWidth,
            top: 0,
            left: 0,
            fill: this.getRandomColor(),
            selectable: false
        }
        const rains: any = [];
        for (let i = 0; i < cWidth; i++) {
            if(i % 2 === 0) {
                rain.left = boxWidth * i;
                rain.fill = this.getRandomColor(),
                rain.top = Math.floor(Math.random() * cHeight) * boxWidth
                const element = new fabric.fabric.Rect(rain);
                rains.push(element);
                canvas.add(element);
            }
        }
        canvas.renderAll();

        this.update(rains, boxWidth, cWidth, cHeight, canvas);
    }

    update = (rains: any, boxSize: number, cWidth: number, cHeight: number, canvas: fabric.fabric.Canvas) => {
        setInterval(() => {
            rains.forEach((rain: fabric.fabric.Rect) => {
                rain.top = Math.floor(Math.random() * cHeight) * boxSize;
                rain.set('fill', this.getRandomColor());
            })
            canvas.renderAll();
        }, 200)
    }

    getRandomColor = () => {
        const r = () => Math.floor(Math.random()*256);
        return "rgb(" + r() + "," + r() + "," + r() + ")";
    }
      
      
}