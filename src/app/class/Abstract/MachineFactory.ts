import { Blender } from "./Blender";
import { Toaster } from "./Toaster";
import { MachineNameMap } from "./MachineName";
import { KitchenMachine } from "./KitchenMachine";

export class MachineFactory{
    public static getMachine(name: string, power: number, weight: number, parameter: number): KitchenMachine{
        if(name.includes(MachineNameMap['Toaster'])) return new Toaster(name, power, weight, parameter);
        else if(name.includes(MachineNameMap['Blender'])) return new Blender(name, power, weight, parameter);
        else throw new Error('no kitchen machine')
    }
}