import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule  // Add RouterModule to the imports array
  ]
})
export class AuthModule { }
