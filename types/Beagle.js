"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Perro_1 = require("./Perro"); // importa perro desde..
var Beagle = /** @class */ (function (_super) {
    __extends(Beagle, _super);
    function Beagle(nombre, raza) {
        if (raza === void 0) { raza = "Beagle"; }
        var _this = _super.call(this, nombre) || this;
        _this.raza = raza;
        ladrar();
        string;
        {
            return ;
            "pepito"; // lo estoy pisando
        }
        return _this;
    }
    return Beagle;
}(Perro_1.Perro));
exports.Beagle = Beagle;
