import { FlyTicket } from './FlyTicket';
describe('Fly ticket test', () => {
    let ticket: FlyTicket;
    beforeEach(() => {
        ticket = new FlyTicket('Poland ticket', 20, 10, "Poland", "Regular ticket to Poland", "FlyTicket", "Poland airline", "5");
    });
    it('should create', () => {
        expect(ticket).toBeTruthy();
    });
    it('Create ticket with negative price', () => {
        expect(() => new FlyTicket('Poland ticket', -20, 10, "Poland", "Regular ticket to Poland", "FlyTicket", "Poland airline", "5")).toThrow(new Error('Price cannot be negative'));
    });
    it('Create ticket with negative weight', () => {
        expect(() => new FlyTicket('Poland ticket', 20, -10, "Poland", "Regular ticket to Poland", "FlyTicket", "Poland airline", "5")).toThrow(new Error('Day length cannot be negative'));
    });
});