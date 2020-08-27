import fabric from 'fabric';

export default class Rain {
    defaultValue = [];

    constructor(canvas: fabric.fabric.Canvas, boxWidth: number, cWidth: number) {
        const rain = {
            width: boxWidth,
            height: boxWidth,
            top: 0,
            left: 0,
            fill: '#fff',
            selectable: false
        }
        const rains: any = [];
        for (let i = 0; i < cWidth / boxWidth; i++) {
            if(i % 2 === 0) {
                rain.left = boxWidth * i;
                rain.top = Math.floor(Math.random() * 5) * boxWidth
                const element = new fabric.fabric.Rect(rain);
                rains.push(element);
                canvas.add(element);
            }
        }
        canvas.renderAll();

        this.update(rains, boxWidth, cWidth, canvas);
    }

    update = (rains: [], boxSize: number, cWidth: number, canvas: fabric.fabric.Canvas) => {
        setInterval(() => {
            rains.forEach((rain: any) => {
                if (rain.top >= cWidth - boxSize) {
                    rain.top = 0;
                } else {
                    rain.top = Math.floor(Math.random() * (cWidth / boxSize)) * boxSize;
                    rain.fill = this.getRandomColor();
                }
            })
            canvas.renderAll();
        }, 200)
    }

    getRandomColor = () => {
        const r = () => Math.floor(Math.random()*256);
        return "rgb(" + r() + "," + r() + "," + r() + ")";
    }
      
      
}