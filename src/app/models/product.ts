import {Book} from "app/models/book";

export class Product {
  book:Book;
  quantity:number;

  constructor(book: Book, quantity: number) {
    this.book = book;
    this.quantity = quantity;
  }
}
