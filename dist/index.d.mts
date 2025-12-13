declare class ColorHandler {
    #private;
    constructor(red: number, green: number, blue: number);
    static random(): ColorHandler;
    get red(): number;
    get green(): number;
    get blue(): number;
    setRed(number: number): void;
    setGreen(number: number): void;
    setBlue(number: number): void;
    multiplyByNumber(number: number): ColorHandler;
    static randomColorBetween(c1: ColorHandler, c2: ColorHandler): ColorHandler;
    static randomColorAtWithGeneralRadius(colorCenter: ColorHandler, radius: number): ColorHandler;
    static randomColorAtWithRadius(colorCenter: ColorHandler, redRadius: number, greenRadius: number, blueRadius: number): ColorHandler;
    addNumber(number: number): ColorHandler;
    addColor(color: ColorHandler): ColorHandler;
    copy(): ColorHandler;
    clampColor(): ColorHandler;
    static sumAndClamp(colors: ColorHandler[]): ColorHandler;
}

export { ColorHandler };
