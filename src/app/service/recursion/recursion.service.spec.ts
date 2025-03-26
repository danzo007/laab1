import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('sum of x = -0.5', () => {
    let x = -0.5;
    let y = 0.6666;
    let y1 = service.getTab(x, x, 1);
    let y2 = y1.get(y)
    console.log(y2)
    // expect(y.toFixed(2)).toBe(y2.toFixed(2));
  }
  );
});
