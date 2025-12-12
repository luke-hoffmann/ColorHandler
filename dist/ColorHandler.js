var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ColorHandler_red, _ColorHandler_green, _ColorHandler_blue, _ColorHandler_colorArray;
import { UsefulFunction } from "usefulfunction";
export class ColorHandler {
    constructor(red, green, blue) {
        _ColorHandler_red.set(this, void 0);
        _ColorHandler_green.set(this, void 0);
        _ColorHandler_blue.set(this, void 0);
        _ColorHandler_colorArray.set(this, void 0);
        if (!Number.isFinite(red))
            throw Error("red must be a finite number");
        if (!Number.isFinite(green))
            throw Error("green must be a finite number");
        if (!Number.isFinite(blue))
            throw Error("blue must be a finite number");
        __classPrivateFieldSet(this, _ColorHandler_red, Math.min(Math.max(0, red), 255), "f");
        __classPrivateFieldSet(this, _ColorHandler_green, Math.min(Math.max(0, green), 255), "f");
        __classPrivateFieldSet(this, _ColorHandler_blue, Math.min(Math.max(0, blue), 255), "f");
        __classPrivateFieldSet(this, _ColorHandler_colorArray, [red, green, blue], "f");
    }
    static random() {
        return new ColorHandler(UsefulFunction.randomIntBetween(0, 255), UsefulFunction.randomIntBetween(0, 255), UsefulFunction.randomIntBetween(0, 255));
    }
    get red() {
        return __classPrivateFieldGet(this, _ColorHandler_red, "f");
    }
    get green() {
        return __classPrivateFieldGet(this, _ColorHandler_green, "f");
    }
    get blue() {
        return __classPrivateFieldGet(this, _ColorHandler_blue, "f");
    }
    setRed(number) {
        __classPrivateFieldSet(this, _ColorHandler_red, number, "f");
    }
    setGreen(number) {
        __classPrivateFieldSet(this, _ColorHandler_green, number, "f");
    }
    setBlue(number) {
        __classPrivateFieldSet(this, _ColorHandler_blue, number, "f");
    }
    multiplyByNumber(number) {
        return new ColorHandler(__classPrivateFieldGet(this, _ColorHandler_red, "f") * number, __classPrivateFieldGet(this, _ColorHandler_green, "f") * number, __classPrivateFieldGet(this, _ColorHandler_blue, "f") * number);
    }
    static randomColorBetween(c1, c2) {
        return new ColorHandler(UsefulFunction.randomIntBetween(c1.red, c2.red), UsefulFunction.randomIntBetween(c1.green, c2.green), UsefulFunction.randomIntBetween(c1.blue, c2.blue));
    }
    static randomColorAtWithGeneralRadius(colorCenter, radius) {
        return this.randomColorAtWithRadius(colorCenter, radius, radius, radius);
    }
    static randomColorAtWithRadius(colorCenter, redRadius, greenRadius, blueRadius) {
        let c1 = new ColorHandler(colorCenter.red - redRadius, colorCenter.green - greenRadius, colorCenter.blue - blueRadius);
        let c2 = new ColorHandler(colorCenter.red + redRadius, colorCenter.green + greenRadius, colorCenter.blue + blueRadius);
        return this.randomColorBetween(c1, c2);
    }
    addNumber(number) {
        if (!Number.isFinite(number))
            throw Error("number is not finite");
        return new ColorHandler(__classPrivateFieldGet(this, _ColorHandler_red, "f") + number, __classPrivateFieldGet(this, _ColorHandler_green, "f") + number, __classPrivateFieldGet(this, _ColorHandler_blue, "f") + number);
    }
    addColor(color) {
        return new ColorHandler(__classPrivateFieldGet(this, _ColorHandler_red, "f") + color.red, __classPrivateFieldGet(this, _ColorHandler_green, "f") + color.green, __classPrivateFieldGet(this, _ColorHandler_blue, "f") + color.blue);
    }
    copy() {
        return new ColorHandler(__classPrivateFieldGet(this, _ColorHandler_red, "f"), __classPrivateFieldGet(this, _ColorHandler_green, "f"), __classPrivateFieldGet(this, _ColorHandler_blue, "f"));
    }
    clampColor() {
        let red = __classPrivateFieldGet(this, _ColorHandler_red, "f") > 255 ? 255 : __classPrivateFieldGet(this, _ColorHandler_red, "f");
        red = __classPrivateFieldGet(this, _ColorHandler_red, "f") < 0 ? 0 : __classPrivateFieldGet(this, _ColorHandler_red, "f");
        let green = __classPrivateFieldGet(this, _ColorHandler_green, "f") > 255 ? 255 : __classPrivateFieldGet(this, _ColorHandler_green, "f");
        green = __classPrivateFieldGet(this, _ColorHandler_green, "f") < 0 ? 0 : __classPrivateFieldGet(this, _ColorHandler_green, "f");
        let blue = __classPrivateFieldGet(this, _ColorHandler_blue, "f") > 255 ? 255 : __classPrivateFieldGet(this, _ColorHandler_blue, "f");
        blue = __classPrivateFieldGet(this, _ColorHandler_blue, "f") < 0 ? 0 : __classPrivateFieldGet(this, _ColorHandler_blue, "f");
        return new ColorHandler(red, green, blue);
    }
    static sumAndClamp(colors) {
        let outputColor = new ColorHandler(0, 0, 0);
        let colorElementValue;
        for (const color of colors) {
            outputColor = color.addColor(outputColor);
        }
        return new ColorHandler(UsefulFunction.clampNumber(outputColor.red, 0, 255), UsefulFunction.clampNumber(outputColor.green, 0, 255), UsefulFunction.clampNumber(outputColor.blue, 0, 255));
    }
}
_ColorHandler_red = new WeakMap(), _ColorHandler_green = new WeakMap(), _ColorHandler_blue = new WeakMap(), _ColorHandler_colorArray = new WeakMap();
