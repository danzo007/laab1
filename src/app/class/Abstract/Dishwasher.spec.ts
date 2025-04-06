import { Dishwasher } from "./Dishwasher";

describe('Dishwasher', () => {
    let dishwasher: Dishwasher;

    beforeEach(() => {
        dishwasher = new Dishwasher('dishwasher', 2200, 50, 1000);
    });

    it('should create an instance', () => {
        expect(dishwasher).toBeTruthy();
    });

    it('should return water consume in cubes', () => {
        expect(dishwasher.getWaterConsume()).toBe(1);
    });
});