import { TravelPack } from './TravelPack';
describe('Travel pack test', () => {
    let travelPack: TravelPack;
    beforeEach(() => {
        travelPack = new TravelPack('Brazil adventure package', 1000, 10, "Brazil", "test", 5, "TravelPack", true, 2);
    });
    it('should create', () => {
        expect(travelPack).toBeTruthy();
    });
    it('Price with 2', () => {
        expect(travelPack.getPrice()).toBe(2020);
    });
    it('Create hotel with negative travelers', () => {
            expect(() => new TravelPack('Brazil adventure package', 1000, 10, "Brazil", "test", 5, "TravelPack", true, -2)).toThrow(new Error('Number of travels must be at least 1'));
        });
});