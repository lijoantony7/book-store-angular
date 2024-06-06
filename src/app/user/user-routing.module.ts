import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';

const routes: Routes = [
  {
    path: 'user/:userId', component: UserComponent,
    children: [
      { path: 'add-books', component: AddBooksComponent },
      { path: 'delete-books', component: DeleteBooksComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
