import { Injectable } from '@angular/core';

@Injectable({
  // providedIn: 'root' // one one instance (singleton instance all over app)
  providedIn: 'any' // separate instance for each components
})
export class CounterService {

public counter: number = 0;

  constructor() { }

  public incCounter(): void{
    this.counter++;
  }

  public decCounter(): void{
    this.counter--;
  }
}
