import { Injectable } from '@angular/core';
import { BookModel } from '../Models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks(): BookModel[]{
    return [
      {
        "id": 1,
        "title": "Angular",
        "totalPages": 125,
        "author": "Kiran",
        "price": {
          "currency": "inr",
          "value": 500
        }
      },
      {
        "id": 2,
        "title": "React",
        "totalPages": 200,
        "author": "John Doe",
        "price": {
          "currency": "usd",
          "value": 30
        }
      },
      {
        "id": 3,
        "title": "Vue.js",
        "totalPages": 150,
        "author": "Jane Smith",
        "price": {
          "currency": "eur",
          "value": 25
        }
      },
      {
        "id": 4,
        "title": "JavaScript: The Good Parts",
        "totalPages": 176,
        "author": "Douglas Crockford",
        "price": {
          "currency": "inr",
          "value": 750
        }
      },
      {
        "id": 5,
        "title": "TypeScript Essentials",
        "totalPages": 220,
        "author": "Sam Johnson",
        "price": {
          "currency": "gbp",
          "value": 20
        }
      }
    ]
  }
}
