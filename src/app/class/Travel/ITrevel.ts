export interface ITrevel {
    getID(): string;
    getName(): string;
    getPrice(): number;
    getDayLength(): number;
    getCountry(): string;
    getDescription(): string;
    getTravelType(): string;
    getDetails(): string[];
}