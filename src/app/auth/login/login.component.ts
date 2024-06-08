import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private routes: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routes.queryParams.subscribe((param) => {

    });
  }
}
