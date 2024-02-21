"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointModule = void 0;
var PointModule = /** @class */ (function () {
    function PointModule(a, b) {
        this.a = a;
        this.b = b;
    }
    PointModule.prototype.drawLine = function () {
        console.log("A: " + this.a + ", B: " + this.b);
    };
    return PointModule;
}());
exports.PointModule = PointModule;
