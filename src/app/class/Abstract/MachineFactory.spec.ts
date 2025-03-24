import { MachineFactory } from "./MachineFactory";

describe('MachineFactory', () => {
    let f = MachineFactory.getMachine(
        'Blender',
        100,
        10,
        4
       );
    it('should create', () => {
        expect(f).toBeTruthy();
    });
    it('Create machine with wrong name with negative power', () => {
        expect(() => MachineFactory.getMachine(
            'fidge',
            100,
            10,
            4
           )).toThrow(new Error('no kitchen machine'));
    });
   
    });