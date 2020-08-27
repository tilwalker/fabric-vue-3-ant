"use strict";
exports.__esModule = true;
var fabric_1 = require("fabric");
var Rain = /** @class */ (function () {
    function Rain(canvas, boxWidth, cWidth) {
        this.defaultValue = [];
        this.update = function (rains, boxSize, cWidth, canvas) {
            setInterval(function () {
                rains.forEach(function (rain) {
                    if (rain.top >= cWidth - boxSize) {
                        rain.top = 0;
                    }
                    else {
                        rain.top = Math.floor(Math.random() * (cWidth / boxSize)) * boxSize;
                        rain.fill = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
                    }
                });
                canvas.renderAll();
            }, 200);
        };
        this.getRandomColor = function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        var rain = {
            width: boxWidth,
            height: boxWidth,
            top: 0,
            left: 0,
            fill: '#fff',
            selectable: false
        };
        var rains = [];
        for (var i = 0; i < cWidth / boxWidth; i++) {
            if (i % 2 === 0) {
                rain.left = boxWidth * i;
                rain.top = Math.floor(Math.random() * 5) * boxWidth;
                var element = new fabric_1["default"].fabric.Rect(rain);
                rains.push(element);
                canvas.add(element);
            }
        }
        canvas.renderAll();
        this.update(rains, boxWidth, cWidth, canvas);
    }
    return Rain;
}());
exports["default"] = Rain;
