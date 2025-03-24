import { Blender } from "./Blender";
import { KitchenMachine } from "./KitchenMachine";
describe('Blender test', () => {
    let blender: Blender;
    beforeEach(() => {
        blender = new Blender('blender', 100, 10, 4);
    });
    it('should create', () => {
        expect(blender).toBeTruthy();
    });
    it('Create Blender with negative pover', () => {
        expect(() => new Blender('blender', -100, 10, 4)).toThrow(new Error('power < 0'));
    });
    it('Create Blender with negative weight', () => {
        expect(() => new Blender('blender', 100, -10, 4)).toThrow(new Error('weight < 0'));
    });

});