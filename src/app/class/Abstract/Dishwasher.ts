import { KitchenMachine } from "./KitchenMachine";
export class Dishwasher extends KitchenMachine{
    waterConsume: number;
    constructor( override name: string, override power: number, override weight: number, waterConsume: number){
        super(name, power, weight);
        this.waterConsume = waterConsume;
    }
    getWaterConsume(){
        let waterConsume = this.waterConsume;
        let waterCubes = waterConsume / 1000;
        return waterCubes;
    }
}