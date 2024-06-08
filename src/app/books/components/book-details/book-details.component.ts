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
  public authoId:number = 0;
  public name:string = '';

  ngOnInit(): void {
      console.log(this.routes);
      this.routes.params.subscribe((param)=>{
        console.log(param);
        this.userId = param['id'];
        this.authoId = param['authorId'];
      });

      this.routes.queryParams.subscribe((param)=>{
        console.log('queryParams', param);
        this.name = param['name'];
      })
  }
}
