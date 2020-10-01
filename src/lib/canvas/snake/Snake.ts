import fabric from 'fabric';
import Canvas from '../Canvas';
import Food from './Food';
import { ISnakeBox } from '@/interface/Canvas.interface';
import UseKeydown from '@/lib/canvas/snake/Event';
import { KeydownEvent } from '@/enum/Event.enum';

export default class Snake extends Canvas {

    defaultValue: any = {};

    snake: ISnakeBox[] = [];

    keycodeEvent = 'right';

    food: any = {};

    initSnake = () => {
        this.snake = [];
        this.defaultValue.snakeHead = {
            type: 'head',
            width: this.boxSize,
            height: this.boxSize,
            top: Math.floor( this.canvas.getHeight() / this.boxSize / 2) * this.boxSize,
            left: this.boxSize * 4,
            selectable: false,
            fill: '#cd3e0f'
        };

        this.defaultValue.snakeBody = [
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

        this.snake.push(this.defaultValue.snakeHead);

        this.canvas.add(new fabric.fabric.Rect(this.defaultValue.snakeHead));
        this.defaultValue.snakeBody.forEach((element: any) => {
            this.snake.push(element);
        })
        this.food = new Food(this.canvasId).initFood(this.canvas.getWidth(), this.canvas.getHeight());
        this.canvas.add(new fabric.fabric.Rect(this.food));

        this.snake.forEach((element: ISnakeBox) => {
            const defaultSnakeBox = new fabric.fabric.Rect(element);
            this.canvas.add(defaultSnakeBox);
        });
        this.canvas.renderAll();
    }

    checkEatItSelf = (): boolean => {
        let isEat = false;
        for (let i = 1; i < this.snake.length; i++) {
            if (this.snake[0].top === this.snake[i].top && this.snake[0].left === this.snake[i].left) {
                isEat = true;
                break;
            }
        }
        return isEat;
    }

    start = () => {
        const action = setInterval(() => {
            this.update(this.keycodeEvent);
            UseKeydown(this.keycodeEvent);
            this.keydownEvent();
            if (
                this.snake[0].top < -1
                || this.snake[0].top > (this.canvas.getHeight() - this.boxSize + 1)
                || this.snake[0].left < -1
                || this.snake[0].left > (this.canvas.getWidth() - this.boxSize + 1)
                || this.checkEatItSelf()
            ) {
                clearInterval(action);
                this.resetSnake();
                this.resetFood();
                this.initSnake();
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
        this.resetSnake();
        this.eatFoodEvent(this.food);
        this.snake.forEach((element: ISnakeBox) => {
            const defaultSnakeBox = new fabric.fabric.Rect(element);
            this.canvas.add(defaultSnakeBox);
        });
        this.canvas.renderAll();
    }

    resetSnake = () => {
        this.canvas.remove(...this.canvas.getObjects().filter((element: any) => element.type === 'head' || element.type === 'body'));
    }

    keydownEvent = () => {
        const onKeydown = (event: KeyboardEvent) => {
          switch (event.keyCode) {
            case KeydownEvent.TOP: {
                if (this.keycodeEvent !== 'bottom') {
                    this.keycodeEvent = 'top';
                }
                // this.update('top');
              break;
            }
            case KeydownEvent.RIGHT: {
                if (this.keycodeEvent !== 'left') {
                    this.keycodeEvent = 'right';
                }
                // this.update('right');
              break;
            }
            case KeydownEvent.BOTTOM: {
                if (this.keycodeEvent !== 'top') {
                    this.keycodeEvent = 'bottom';
                }
                // this.update('bottom');
              break;
            }
            case KeydownEvent.LEFT: {
                if (this.keycodeEvent !== 'right') {
                    this.keycodeEvent = 'left';
                }
                // this.update('left');
              break;
            }
          }
        };
      
        window.addEventListener('keydown', onKeydown);
    }

    eatFoodEvent = (food: any): void => {
        if (this.snake[0].top === food.top && this.snake[0].left === food.left) {
            this.resetFood();
            this.updateSnake();
            this.food = new Food(this.canvasId).initFood(this.canvas.getWidth(), this.canvas.getHeight());
            this.canvas.add(new fabric.fabric.Rect(this.food));
        }
    }

    updateSnake = () => {
        const snakeBodyUpdate: ISnakeBox = {
            type: 'body',
            width: this.boxSize,
            height: this.boxSize,
            top: this.snake[this.snake.length - 1].top,
            left: this.snake[this.snake.length - 1].left,
            selectable: false,
            fill: '#fff'
        };
        this.snake.push(snakeBodyUpdate);
    }

    resetFood = (): void => {
        this.canvas.remove(...this.canvas.getObjects().filter((element: any) => element.type === 'food'));
    }
}