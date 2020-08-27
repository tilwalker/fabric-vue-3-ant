"use strict";
exports.__esModule = true;
var fabric_1 = require("fabric");
var Rain_1 = require("@/lib/rain/Rain");
var Fabric = fabric_1["default"].fabric;
var Canvas = /** @class */ (function () {
    function Canvas(canvasElementId) {
        var _this = this;
        this.boxSize = 30;
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
        this.boxBackground = function (boxSize, top, left) {
            var rect = new Fabric.Rect({
                width: boxSize,
                height: boxSize,
                top: top,
                left: left,
                selectable: false,
                hasBorders: true,
                borderColor: '#fff'
            });
            return rect;
        };
        this.drawBackground = function (boxSize, cWidth) {
            var elementArr = [];
            for (var i = 0; i < cWidth / boxSize; i++) {
                for (var j = 0; j < cWidth / boxSize; j++) {
                    var element = _this.boxBackground(boxSize, boxSize * i, boxSize * j);
                    elementArr.push(element);
                }
            }
            return elementArr;
        };
        if (canvasElementId) {
            this.canvas = new Fabric.Canvas(canvasElementId, {
                width: this.boxSize * 20,
                height: this.boxSize * 20,
                backgroundColor: '#ccc',
                centeredScaling: true
            });
        }
        else {
            this.canvas = new Fabric.Canvas('c', {
                width: this.boxSize * 20,
                height: this.boxSize * 20,
                backgroundColor: '#ccc'
            });
        }
        var elementArr = this.drawBackground(this.boxSize, this.boxSize * 20);
        var groupBackground = new Fabric.Group(elementArr, {
            selectable: false,
            top: 0,
            left: 0
        });
        this.canvas.add(groupBackground);
        this.canvas.renderAll();
        // this.snake = new Snake(this.canvas, this.boxSize, this.boxSize * 20);
        this.rain = new Rain_1["default"](this.canvas, this.boxSize, this.boxSize * 20);
    }
    return Canvas;
}());
exports["default"] = Canvas;
