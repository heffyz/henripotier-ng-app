import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
panier:Product[]=[];
  constructor(private importBooks: ImportBooksService) {
    this.importBooks.getBooks().subscribe((books)=>this.books=books);
  }

  ngOnInit() {

  }
  add(b,g){

    let p = new Product(b,g);
    this.panier.push(p);
  }
}
