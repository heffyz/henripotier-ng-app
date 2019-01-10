export class Book {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synopsis: string[] = [];

  constructor(isbn: string, title: string, price: number, cover: string, synopsis: string[]) {
    this.isbn = isbn;
    this.title = title;
    this.price = price;
    this.cover = cover;
    this.synopsis = synopsis;
  }
}
