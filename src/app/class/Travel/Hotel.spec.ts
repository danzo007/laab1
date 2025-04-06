import { Hotel } from "./Hotel";
describe('Hotel test', () => {
    let hotel: Hotel;
    beforeEach(() => {
        hotel = new Hotel('Radisson blu', 100, 10, "Poland", "Radisson blu", "Hotel", 5, true);
    });
    it('should create', () => {
        expect(hotel).toBeTruthy();
    });
    it('Pricw with brackfast', () => {
        expect(hotel.getPrice()).toBe(110);
    });
    it('Pricw without brackfast', () => {
        hotel = new Hotel('Radisson blu', 100, 10, "Poland", "Radisson blu", "Hotel", 5, false);
        expect(hotel.getPrice()).toBe(100);
    });
    it('Create hotel with negative stars', () => {
        expect(() => new Hotel('Radisson blu', 100, 10, "Poland", "Radisson blu", "Hotel", -5, true)).toThrow(new Error('Stars must be between 0 and 5'));
    });
});