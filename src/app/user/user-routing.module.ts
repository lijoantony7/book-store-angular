import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';

const routes: Routes = [
  { path: 'add-books', component: AddBooksComponent },
  { path: 'delete-books', component: DeleteBooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
