"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
var IoCContainer = /** @class */ (function () {
    function IoCContainer() {
        this.dependencies = {};
    }
    IoCContainer.prototype.bind = function (key, dependency) {
        if (key in this.dependencies) {
            console.log('Key already bound. Overwriting');
        }
        this.dependencies[key] = dependency;
    };
    IoCContainer.prototype.resolve = function (key) {
        if (!(key in this.dependencies)) {
            throw new Error("Depndencey '".concat(key, "' not registered."));
        }
        return this.dependencies[key];
    };
    return IoCContainer;
}());
exports.IoCContainer = IoCContainer;
