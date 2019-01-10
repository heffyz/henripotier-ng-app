import {Component, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {SharedService} from "../../services/sharedService";
import {Product} from "../../models/product";


@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css'],
  providers: []
})
export class LivresComponent implements OnInit {
  books: Book[] = [];

  constructor(private importBooks: SharedService) {
    this.importBooks.getBooks().subscribe((books) => this.books = books);
  }

  ngOnInit() {

  }

  add(b, g) {
    let product = new Product(b.isbn, g);
    this.importBooks.addProduct(product).subscribe(
      res => {
        this.importBooks.sharedNode =1;
        console.log("add done");
      },
      err => {
        console.log("error");
      }
    )
  }
}
