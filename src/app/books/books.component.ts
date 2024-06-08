import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  constructor(private routes: ActivatedRoute){}

  userId: number = 12;
  authorId: number = 14;

  ngOnInit(): void {
    this.routes.firstChild?.params.subscribe((param)=>{
      console.log('childeparams', param);
    });
  }
}
