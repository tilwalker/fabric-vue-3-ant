"use strict";
exports.__esModule = true;
var fabric_1 = require("fabric");
var Snake = /** @class */ (function () {
    function Snake(canvas, boxWidth, cWidth) {
        this.defaultValue = {};
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
        };
        var snakeHead = new fabric_1["default"].fabric.Rect(this.defaultValue.snakeHead);
        canvas.add(snakeHead);
        this.defaultValue.snakeBody.forEach(function (element) {
            var bodyElement = new fabric_1["default"].fabric.Rect(element);
            canvas.add(bodyElement);
        });
        canvas.renderAll();
    }
    return Snake;
}());
exports["default"] = Snake;
