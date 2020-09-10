import fabric from 'fabric';
import Canvas from '../Canvas';
import { ISnakeBox } from '@/interface/Canvas.interface';
import UseKeydown from '@/lib/canvas/snake/Event';

export default class Snake extends Canvas {
    defaultValue: any = {};

    snake: ISnakeBox[] = [];

    keycodeEvent = 'right';

    initSnake = () => {
        this.snake = [];
        const snakeHead: ISnakeBox = {
            type: 'head',
            width: this.boxSize,
            height: this.boxSize,
            top: Math.floor( this.canvas.getHeight() / this.boxSize / 2) * this.boxSize,
            left: this.boxSize * 4,
            selectable: false,
            fill: '#cd3e0f'
        };

        const snakeBody: ISnakeBox[] = [
            {
                type: 'body',
                width: this.boxSize,
                height: this.boxSize,
                top: Math.floor(this.canvas.getHeight() / this.boxSize / 2) * this.boxSize,
                left: this.boxSize * 3,
                selectable: false,
                fill: '#fff'
            },
            {
                type: 'body',
                width: this.boxSize,
                height: this.boxSize,
                top: Math.floor(this.canvas.getHeight() / this.boxSize / 2) * this.boxSize,
                left: this.boxSize * 2,
                selectable: false,
                fill: '#fff'
            }
        ];

        this.snake.push(snakeHead);

        this.canvas.add(new fabric.fabric.Rect(snakeHead));
        snakeBody.forEach((element: any) => {
            this.snake.push(element);
        })
        this.snake.forEach((element: ISnakeBox) => {
            const defaultSnakeBox = new fabric.fabric.Rect(element);
            this.canvas.add(defaultSnakeBox);
        });
        this.canvas.renderAll();
    }

    start = () => {
        const action = setInterval(() => {
            this.update(this.keycodeEvent);
            UseKeydown(this.keycodeEvent);
            if (
                this.snake[0].top === 0
                || this.snake[0].top === (this.canvas.getHeight() - this.boxSize)
                || this.snake[0].left === 0
                || this.snake[0].left === (this.canvas.getWidth() - this.boxSize)
            ) {
                clearInterval(action);
            }
        }, 500);
        setTimeout(() => {
            action;
        }, 5000);
    }

    update = (keycodeEvent?: string): void => {
        for (let i = this.snake.length - 1; i >= 0; i--) {
            if (i - 1 < 0) {
                switch (keycodeEvent) {
                    case 'top': {
                        this.snake[i].top -= this.boxSize;
                        break;
                    }
                    case 'right': {
                        this.snake[i].left += this.boxSize;
                        break;
                    }
                    case 'bottom': {
                        this.snake[i].top += this.boxSize;
                        break;
                    }
                    case 'left': {
                        this.snake[i].left -= this.boxSize;
                        break;
                    }
                }
            } else {
                this.snake[i].top = this.snake[i-1].top;
                this.snake[i].left = this.snake[i-1].left;
            }
        }
        // this.initCanvas(this.canvas.getWidth(), this.canvas.getHeight());
        this.canvas.remove(...this.canvas.getObjects().filter((element: any) => element.type === 'head' || element.type === 'body'));
        this.snake.forEach((element: ISnakeBox) => {
            const defaultSnakeBox = new fabric.fabric.Rect(element);
            this.canvas.add(defaultSnakeBox);
        });
        this.canvas.renderAll();
    }
}