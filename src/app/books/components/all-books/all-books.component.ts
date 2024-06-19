import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { Counter2Service } from '../../../shared/services/counter2.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent implements OnInit{
  constructor(public bookService: BookService, public _counterService: Counter2Service){}

  public books: BookModel[] = [];

  ngOnInit(): void {
      this.books = this.bookService.getBooks();
      console.log(this.books);
  }

  public increaseCount(): void{
    this._counterService.incCounter();
  }

  public decreseCount(): void{
    this._counterService.decCounter();
  }
}
