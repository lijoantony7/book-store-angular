import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrl: './delete-books.component.css'
})
export class DeleteBooksComponent implements OnInit{
  constructor(private routes: ActivatedRoute){}

  userId:string = '';

  ngOnInit(): void {
      this.routes.parent?.params.subscribe((param)=>{
        console.log(param);
        this.userId = param['userId'];
      });
  }
}
