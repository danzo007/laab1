import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService) { }
  getSeries(x: number){
    let min = 1e-12;
    let sum: number = 1;
    let mem = x;
    do{
      sum = sum + mem;
      mem = mem * x;
    }while(mem > min || mem < -min);
    return sum;
  }
  getTab(xn: number= -0.5, xk: number = 0.5, h: number = 0.1){
  let x = xn, y = 0.0;
  while(x <= xk){
    y = this.getSeries(x);
    this.xy.set(x.toFixed(2),y);
    if(this.LogService){
      this.LogService.write(`x=${x.toFixed(2)} y=${y.toFixed(4)}`);
    }
    x = x + h;
  }
  return this.xy;
  }
}
