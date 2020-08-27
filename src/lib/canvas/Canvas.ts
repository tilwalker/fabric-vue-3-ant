import fabric from 'fabric';
// import { ICanvas, IObjectElement } from '@/interface/Canvas.interface';
// import { ObjectType } from '@/enum/Canvas.enum';
import Snake from '@/lib/snake/Snake';
import Rain from '@/lib/rain/Rain';

const Fabric = fabric.fabric;

export default class Canvas {
  boxSize = 30;
  canvas!: any;
  snake!: any;
  rain!: any;

  constructor(canvasElementId?: string) {
    if (canvasElementId) {
      this.canvas = new Fabric.Canvas(canvasElementId, {
        width: this.boxSize * 20,
        height: this.boxSize * 20,
        backgroundColor: '#ccc',
        centeredScaling: true
      });
    } else {
      this.canvas = new Fabric.Canvas('c', {
        width: this.boxSize * 20,
        height: this.boxSize * 20,
        backgroundColor: '#ccc',
      });
    }

    const elementArr = this.drawBackground(this.boxSize, this.boxSize * 20);
    const groupBackground = new Fabric.Group(elementArr, {
      selectable: false,
      top: 0,
      left: 0,
    });
    this.canvas.add(groupBackground);
    this.canvas.renderAll();

    // this.snake = new Snake(this.canvas, this.boxSize, this.boxSize * 20);
    this.rain = new Rain(this.canvas, this.boxSize, this.boxSize * 20);
  }

  // returnFabricElement(elementData: IObjectElement) {
  //   let element: any;
  //   switch(elementData.type) {
  //     case ObjectType.RECT: {
  //       element = new Fabric.Rect(elementData);
  //       break;
  //     }
  //     case ObjectType.ITEXT: {
  //       element = new Fabric.Text(elementData);
  //     }
  //   }
  // }

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

  drawBackground = (boxSize: number, cWidth: number) => {
    const elementArr = [];
    for (let i = 0; i < cWidth / boxSize; i++) {
      for (let j = 0; j < cWidth / boxSize; j++) {
        const element = this.boxBackground(boxSize, boxSize * i, boxSize * j);
        elementArr.push(element)
      }
    }
    return elementArr;
  }
}