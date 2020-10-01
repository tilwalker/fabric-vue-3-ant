import fabric from 'fabric';
import { ISnakeBox } from '@/interface/Canvas.interface';
import Canvas from '../Canvas';

export default class Food extends Canvas {
    food: ISnakeBox = {
        type: 'food',
        width: this.boxSize,
        height: this.boxSize,
        top: 0,
        left: 0,
        selectable: false,
        fill: '#fff'
    }

    initFood = (cWidth: number, cHeight: number): ISnakeBox => {
        const randomFood = { ...this.food }
        const top = Math.floor(Math.random() * cHeight/this.boxSize) * this.boxSize;
        const left = Math.floor(Math.random() * cWidth/this.boxSize) * this.boxSize;
        console.log(top, left, 'top, left');
        randomFood.top = top;
        randomFood.left = left;
        return randomFood;
    }

}
