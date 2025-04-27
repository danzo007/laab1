import { TestBed } from '@angular/core/testing';

import { TravelService } from './travel.service';
import { TravelFactory } from 'src/app/class/Travel/TravelFactory';
import { Hotel } from 'src/app/class/Travel/Hotel';

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be added', () => {
    const travel = new Hotel('Hotel', 100, 3, 'USA', 'A nice hotel', 'Hotel', 5, false);
    service.addTravel(travel);
    expect(service.travels.length).toBe(1);
    expect(service.travels[0]).toEqual(travel);
  });
});
