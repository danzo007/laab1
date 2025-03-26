import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getRecursion(x: number, mem: number, sum: number){
    let min = 1e-12;
    sum = sum + mem;
    mem = mem * x;
    if(mem > min || mem < -min) this.getRecursion(x, mem, sum);
    else this.yy = sum;
  }

  getTab(xn: number= -0.5, xk: number = 0.5, h: number = 0.1){
    let x = xn, y = 1.0;
    while(x <= xk){
      this.getRecursion(x, x, y);
      this.xy.set(x.toFixed(2), this.yy);
      if(this.logService){
        this.logService.write(`x=${x.toFixed(2)} y=${this.yy.toFixed(4)}`);
      }
      x = x + h;
    }
    return this.xy;
  }
}
