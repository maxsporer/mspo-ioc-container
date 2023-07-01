"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
var container_1 = require("./container");
Object.defineProperty(exports, "IoCContainer", { enumerable: true, get: function () { return container_1.IoCContainer; } });
var container_2 = require("./container");
var A = /** @class */ (function () {
    function A(num) {
        this.num = num;
    }
    return A;
}());
var container = new container_2.IoCContainer();
container.bind('a', new A(5));
var exampleA = container.resolve('a');
console.log(exampleA); // A { num: 5 }
