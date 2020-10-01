import fabric from 'fabric';

const Fabric = fabric.fabric;

export default class Canvas {
  boxSize = 30;
  canvas!: fabric.fabric.Canvas;
  snake!: any;
  rain!: any;
  canvasId!: string;

  constructor(canvasElementId: string) {
    this.canvasId = canvasElementId;
    this.canvas = new Fabric.Canvas(canvasElementId);
  }

  initCanvas = (cWidth: number, cHeight: number) => {
    this.canvas.remove(...this.canvas.getObjects());
    this.canvas.setWidth(this.boxSize * cWidth);
    this.canvas.setHeight(this.boxSize * cHeight);
    this.canvas.calcOffset();
    // this.canvas.remove();
    const elementArr = this.drawBackground(this.boxSize, cWidth, cHeight);
    const groupBackground = new Fabric.Group(elementArr, {
      selectable: false,
      top: 0,
      left: 0,
    });
    this.canvas.add(groupBackground);
    this.canvas.renderAll();
  }

  boxBackground = (boxSize: number, top: number, left: number) => {
    const rect = new Fabric.Rect({
      width: boxSize,
      height: boxSize,
      top: top,
      left: left,
      selectable: false,
      hasBorders: true,
      borderColor: '#fff',
    })
    return rect
  }

  drawBackground = (boxSize: number, cWidth: number, cHeight: number) => {
    const elementArr = [];
    for (let i = 0; i < cWidth; i++) {
      for (let j = 0; j < cHeight; j++) {
        const element = this.boxBackground(boxSize, boxSize * j, boxSize * i);
        elementArr.push(element)
      }
    }
    return elementArr;
  }
  
  getRandomColor = () => {
    const r = () => Math.floor(Math.random()*256);
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }
}