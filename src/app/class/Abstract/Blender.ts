import { KitchenMachine } from "./KitchenMachine";
export class Blender extends KitchenMachine{
    bladeCount: number;
    constructor( override name: string, override power: number, override weight: number, bladeCount: number){
        super(name, power, weight);
        this.bladeCount = bladeCount;
    }
}