import { Hotel } from "./Hotel";

export class TravelPack extends Hotel {
    private numberOfTravels: number = 1;

    constructor(id: string, name: string, price: number, dayLength: number, country: string, description: string, stars: number, travelType: string, breakfast: boolean, numberOfTravels: number) {
        super(id, name, price, dayLength, country, description, travelType, stars, breakfast);
        if (numberOfTravels < 1) {
            throw new Error('Number of travels must be at least 1');
        }
        this.numberOfTravels = numberOfTravels;
    }
    getNumberOfTravels(): number {
        return this.numberOfTravels;
    }
    override getPrice(): number {
        let price = super.getPrice();
        price *= this.numberOfTravels;
        return price;
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Number of travels: ${this.numberOfTravels}`);
        return details;
    }
}