import { Travel } from "./Travel";


export class Hotel extends Travel {
    private stars: number = 1;
    private breakfast: boolean = false;

    constructor(name: string, price: number, dayLength: number, country: string, description: string, travelType: string, stars: number, breakfast: boolean) {
        super(name, price, dayLength, country, description, travelType);
        if (stars < 0 || stars > 5) {
            throw new Error('Stars must be between 0 and 5');
        }
        this.stars = stars;
        this.breakfast = breakfast;
    }
    getStars(): number {
        return this.stars;
    }
    getBreakfast(): boolean {
        return this.breakfast;
    }
    override getPrice(): number {
        let price = super.getPrice();
        if (this.breakfast) {
            price += 10;
        }
        return price;
    }
    override getDescription(): string {
        let description = super.getDescription();
        if (this.breakfast) {
            description += ' with breakfast';
        }
        return description;
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Stars: ${this.stars}`);
        details.push(`Breakfast: ${this.breakfast ? 'Yes' : 'No'}`);
        return details;
    }
}