import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent implements OnInit{

  constructor(private routes: ActivatedRoute){}

  userId: number = 12;
  authorId: number = 14;

  ngOnInit(): void {
    this.routes.firstChild?.params.subscribe((param)=>{
      console.log('childeparams', param);
    });
  }
}
