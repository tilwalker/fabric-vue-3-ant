import fabric from 'fabric';
import Canvas from '../Canvas';

export default class Rain extends Canvas {
    defaultValue = [];

    // constructor(canvas: fabric.fabric.Canvas, boxWidth: number, cWidth: number, cHeight: number) {
    //     const rain = {
    //         width: boxWidth,
    //         height: boxWidth,
    //         top: 0,
    //         left: 0,
    //         fill: this.getRandomColor(),
    //         selectable: false
    //     }
    //     const rains: any = [];
    //     for (let i = 0; i < cWidth; i++) {
    //         if(i % 2 === 0) {
    //             rain.left = boxWidth * i;
    //             rain.fill = this.getRandomColor(),
    //             rain.top = Math.floor(Math.random() * cHeight) * boxWidth
    //             const element = new fabric.fabric.Rect(rain);
    //             rains.push(element);
    //             canvas.add(element);
    //         }
    //     }
    //     canvas.renderAll();

    //     this.update(rains, boxWidth, cWidth, cHeight, canvas);
    // }

    update = (rains: any, cWidth: number, cHeight: number) => {
        setInterval(() => {
            rains.forEach((rain: fabric.fabric.Rect) => {
                rain.top = Math.floor(Math.random() * cHeight) * this.boxSize;
                rain.set('fill', this.getRandomColor());
            })
            this.canvas.renderAll();
        }, 200)
    }
    
    applyRainCanvas = (cWidth: number, cHeight: number) => {
        const rain = {
            width: this.boxSize,
            height: this.boxSize,
            top: 0,
            left: 0,
            fill: this.getRandomColor(),
            selectable: false
        }
        const rains: any = [];
        for (let i = 0; i < cWidth; i++) {
            if(i % 2 === 0) {
                rain.left = this.boxSize * i;
                rain.fill = this.getRandomColor(),
                rain.top = Math.floor(Math.random() * cHeight) * this.boxSize
                const element = new fabric.fabric.Rect(rain);
                rains.push(element);
                this.canvas.add(element);
            }
        }
        this.canvas.renderAll();

        this.update(rains, cWidth, cHeight)
    }

    getRandomColor = () => {
        const r = () => Math.floor(Math.random()*256);
        return "rgb(" + r() + "," + r() + "," + r() + ")";
    }
      
      
}