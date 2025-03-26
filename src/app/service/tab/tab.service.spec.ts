import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return x and y', () => {
    let x = -0.5;
    let y = 0.6667;
    let xy = service.getTab();
    let y1: number | undefined = 5;
    y1 = xy.y[xy.x.indexOf(x.toFixed(2))];
    if(y1 != undefined){
      expect(y1.toFixed(4)).toBe(y.toFixed(4));
    }
  });
});
