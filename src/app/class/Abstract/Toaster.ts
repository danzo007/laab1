import { KitchenMachine } from "./KitchenMachine";
export class Toaster extends KitchenMachine{
    slotCount: number;
    constructor( override name: string, override power: number, override weight: number, slotCount: number){
        super(name, power, weight);
        this.slotCount = slotCount;
    }
}