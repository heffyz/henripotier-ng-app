export class Book {
  isbn: string;
  title: string;
  price: number;
  cover: string;
  synposis: string[];

  constructor(isbn: string, title: string, price: number, cover: string, synposis: string[]) {
    this.isbn = isbn;
    this.title = title;
    this.price = price;
    this.cover = cover;
    this.synposis = synposis;
  }
}
