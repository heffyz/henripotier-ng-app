import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ImportBooksService} from "../../services/import-books.service";
import {Product} from "../../models/product";


@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css'],
  providers: [ImportBooksService]
})
export class LivresComponent implements OnInit {
books:Book[]=[];
  constructor(private importBooks: ImportBooksService) {
    this.importBooks.getBooks().subscribe((books)=>this.books=books);
  }

  ngOnInit() {
    this.books.forEach(function (book){
      this.importBooks.postBook(book).subscribe(
        res =>{console.log('book sent')},
        err => {console.error('error');}
      );
    });
  }
  add(b,g){

    let product = new Product(b.isbn,g);
    this.importBooks.addProduct(product).subscribe(
      res =>{console.log("add done");},
      err =>{console.log("error");}
    )
  }
}
