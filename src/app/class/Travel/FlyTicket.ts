import {Travel} from './Travel';

export class FlyTicket extends Travel {
    private airline: string = '';
    private flightNumber: string = '';

    constructor(name: string, price: number, dayLength: number, country: string, description: string, travelType: string, airline: string, flightNumber: string) {
        super(name, price, dayLength, country, description, travelType);
        this.airline = airline;
        this.flightNumber = flightNumber;
    }

    getAirline(): string {
        return this.airline;
    }
    getFlightNumber(): string {
        return this.flightNumber;
    }
}