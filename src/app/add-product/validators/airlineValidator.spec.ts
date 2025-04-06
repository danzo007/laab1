import { isValidAirline } from './airlineValidator';
describe('AirlineValidator', () => {

  it('valid airlane', () => {
    let s = isValidAirline('AA');
    expect(s).toBe(true);
  });

  it('invalid airlane', () => {
    let s = isValidAirline('A1A');
    expect(s).toBe(false);
  });

  it('valid airlane with space', () => {
    let s = isValidAirline('A A');
    expect(s).toBe(true);
  });

  it('valid airlane with lowercase', () => {
    let s = isValidAirline('a A');
    expect(s).toBe(true);
  });

  it('invalid airlane', () => {
    let s = isValidAirline('AA *');
    expect(s).toBe(false);
  });
});