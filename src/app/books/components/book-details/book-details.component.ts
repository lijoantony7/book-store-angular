import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  constructor(private routes: ActivatedRoute){};

  public userId:number = 0;

  ngOnInit(): void {
      console.log(this.routes);
      this.routes.params.subscribe((param)=>{
        this.userId = param['id'];
      });
  }
}
