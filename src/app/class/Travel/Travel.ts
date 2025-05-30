import { ITrevel } from "./ITrevel";

export abstract class Travel implements ITrevel {
    private id: string = '';
    private name: string = '';
    private price: number = 1;
    private dayLength: number = 1;
    private country: string = '';
    private description: string = '';
    private travelType: string = '';
    
    constructor(id: string, name: string, price: number, dayLength: number, country: string, description: string, travelType: string) {
        if(price < 0){
            throw new Error('Price cannot be negative');
        }
        if(dayLength < 0){
            throw new Error('Day length cannot be negative');
        }
        this.id = id;
        this.name = name;
        this.price = price;
        this.dayLength = dayLength;
        this.country = country;
        this.description = description;
        this.travelType = travelType;
    }
    getID(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    
    getPrice(): number {
        return this.price;
    }
    
    getDayLength(): number {
        return this.dayLength;
    }
    
    getCountry(): string {
        return this.country;
    }
    
    getDescription(): string {
        return this.description;
    }
    getTravelType(): string {
        return this.travelType;
    }
    getDetails(): string[] {
        return [];
    }
}