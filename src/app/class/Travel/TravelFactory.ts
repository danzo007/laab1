import { travelType } from "./TravelType";
import { Hotel } from "./Hotel";
import { TravelPack } from "./TravelPack";
import { FlyTicket } from "./FlyTicket";
import { Travel } from "./Travel";
import { ITrevel } from "./ITrevel";

export class TravelFactory {
    static createTravel(data: any): ITrevel {
        console.log(data.travelType)
        switch (data.travelType) {
            case travelType[0]:
                return new FlyTicket(data.name, data.price, data.dayLength, data.country, data.description, data.travelType, data.airline, data.flightNumber);
            case travelType[1]:
                return new Hotel(data.name, data.price, data.dayLength, data.country, data.description, data.travelType, data.stars, data.breakfast);
            case travelType[2]:
                return new TravelPack(data.name, data.price, data.dayLength, data.country, data.description, data.stars, data.travelType, data.breakfast, data.numberOfTravels);
            default:
                throw new Error('Invalid travel type gg');
        }
    }
}