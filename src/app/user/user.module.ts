import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    AddBooksComponent,
    DeleteBooksComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
