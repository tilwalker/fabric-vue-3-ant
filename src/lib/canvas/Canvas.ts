import fabric from 'fabric';
// import { ICanvas, IObjectElement } from '@/interface/Canvas.interface';
// import { ObjectType } from '@/enum/Canvas.enum';
import Snake from '@/lib/snake/Snake';
import Rain from '@/lib/rain/Rain';

const Fabric = fabric.fabric;

export default class Canvas {
  boxSize = 30;
  canvas!: fabric.fabric.Canvas;
  snake!: any;
  rain!: any;

  constructor(canvasElementId: string) {
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

  applyRainCanvas = (cWidth: number, cHeight: number) => {
    new Rain(this.canvas, this.boxSize, cWidth, cHeight);
  }
}