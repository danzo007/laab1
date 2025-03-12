export abstract class KitchenMachine{
    name: string = '';
    power: number = 1;
    weight: number = 1;

    constructor(name: string, power: number, weight: number ){
        if(power <= 0) throw new Error('power < 0');
        if(weight <= 0) throw new Error('weight < 0');

        this.name = name;
        this.power = power;
        this.weight = weight;
    }
    displayInfo(){
        return(
            'Name= ' + this.name + ' ' +
            'Power= ' + this.power + ' ' + 
            'Weight= ' + this.weight + ' '
        )
    }
    getPower(){
        return(
            'Power= ' + this.power
        )
    }
}