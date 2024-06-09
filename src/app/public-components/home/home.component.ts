import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../shared/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(public _counterService: CounterService){}

  ngOnInit(): void {

  }

  public increaseCount(): void{
    this._counterService.incCounter();
  }

  public decreseCount(): void{
    this._counterService.decCounter();
  }
}
