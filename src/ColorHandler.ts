import { UsefulFunction } from "usefulfunction";
export class ColorHandler {
    #red : number;
    #green : number;
    #blue : number;
    #colorArray : number[];
    constructor (red : number,green : number,blue : number){
        if (!Number.isFinite(red)) throw Error("red must be a finite number");
        if (!Number.isFinite(green)) throw Error("green must be a finite number");
        if (!Number.isFinite(blue)) throw Error("blue must be a finite number");
        this.#red = Math.min(Math.max(0,red),255);
        this.#green = Math.min(Math.max(0,green),255);
        this.#blue = Math.min(Math.max(0,blue),255);
        this.#colorArray = [red,green,blue];
    }
    static random() : ColorHandler{
        return new ColorHandler(UsefulFunction.randomIntBetween(0,255),UsefulFunction.randomIntBetween(0,255),UsefulFunction.randomIntBetween(0,255));
    }
    get red() : number{
        return this.#red;
    }
    get green() : number{
        return this.#green;
    }
    get blue() : number{
        return this.#blue;
    }
    setRed(number : number) : void {
        this.#red = number;
    }
    setGreen(number : number) : void {
        this.#green = number;
    }
    setBlue(number : number) : void {
        this.#blue = number;
    }
    multiplyByNumber(number : number) : ColorHandler{
        
        return new ColorHandler(this.#red * number, this.#green * number, this.#blue * number);

    }
    static randomColorsBetween(n : number, c1: ColorHandler,c2 : ColorHandler) : ColorHandler[] {
        let colors = [];
        for (let i =0 ; i < n; i++) {
            colors.push(this.randomColorBetween(c1,c2));
        }
        return colors;
    }
    static randomColorBetween(c1 : ColorHandler, c2 : ColorHandler) : ColorHandler{
        return new ColorHandler(UsefulFunction.randomIntBetween(c1.red,c2.red),UsefulFunction.randomIntBetween(c1.green,c2.green),UsefulFunction.randomIntBetween(c1.blue,c2.blue));
    }
    static randomColorAtWithGeneralRadius(colorCenter : ColorHandler, radius : number){
        return this.randomColorAtWithRadius(colorCenter,radius,radius,radius);
    }
    static randomColorAtWithRadius(colorCenter : ColorHandler, redRadius : number,greenRadius : number,blueRadius : number) {
        let c1 = new ColorHandler(colorCenter.red - redRadius, colorCenter.green - greenRadius, colorCenter.blue - blueRadius);
        let c2 = new ColorHandler(colorCenter.red + redRadius, colorCenter.green + greenRadius, colorCenter.blue + blueRadius);
        return this.randomColorBetween(c1,c2);
    }
    addNumber(number : number) : ColorHandler{
        if (!Number.isFinite(number)) throw Error("number is not finite");
        return new ColorHandler(this.#red + number, this.#green + number, this.#blue + number);
        
    }
    addColor(color : ColorHandler) : ColorHandler {
        return new ColorHandler(this.#red + color.red, this.#green + color.green, this.#blue + color.blue);
    }
    copy(){
        return new ColorHandler(this.#red,this.#green,this.#blue);
    }
    clampColor() : ColorHandler{
        let red = this.#red > 255 ? 255 : this.#red;
        red = this.#red < 0 ? 0 : this.#red; 

        let green = this.#green > 255 ? 255 : this.#green;
        green = this.#green < 0 ? 0 : this.#green; 

        let blue = this.#blue > 255 ? 255 : this.#blue;
        blue = this.#blue < 0 ? 0 : this.#blue; 
        return new ColorHandler(red,green,blue);
    }
    static sumAndClamp(colors : ColorHandler[]) : ColorHandler{
        let outputColor = new ColorHandler(0,0,0);
        let colorElementValue;
        for (const color of colors) {
            outputColor = color.addColor(outputColor);
        }
        return new ColorHandler(UsefulFunction.clampNumber(outputColor.red,0,255),UsefulFunction.clampNumber(outputColor.green,0,255),UsefulFunction.clampNumber(outputColor.blue,0,255));
        
    }
    elementWiseMultiplication(color : ColorHandler ) : ColorHandler {
        return new ColorHandler(color.red * this.#red,color.green * this.#green, color.blue * this.#blue);
    }
}