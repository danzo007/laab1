import {Travel} from './Travel';

export class FlyTicket extends Travel {
    private airline: string = '';
    private flightNumber: string = '';

    constructor(id: string, name: string, price: number, dayLength: number, country: string, description: string, travelType: string, airline: string, flightNumber: string) {
        super(id, name, price, dayLength, country, description, travelType);
        this.airline = airline;
        this.flightNumber = flightNumber;
    }

    getAirline(): string {
        return this.airline;
    }
    getFlightNumber(): string {
        return this.flightNumber;
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Airline: ${this.airline}`);
        details.push(`Flight Number: ${this.flightNumber}`);
        return details;
    }
}