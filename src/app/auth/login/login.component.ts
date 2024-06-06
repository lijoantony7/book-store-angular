import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private routes: ActivatedRoute, private router: Router) { }

  public name: string = '';
  public email: string = '';

  ngOnInit(): void {
    this.routes.queryParams.subscribe((param) => {
      console.log('queryParams', param);
      this.name = param['name'];
      this.email = param['email'];
    });
  }

  signIn(): void{
    this.router.navigate(['/auth/signin']);
  }

  bookDetail(userId:number, authorId:number): void{
    this.router.navigate(['/public/book-details', userId, 'author', authorId],
      {queryParams: {name: 'Lijo'}}
    );
  }
}
