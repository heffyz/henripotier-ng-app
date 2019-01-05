import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {ImportBooksService} from "../../services/import-books.service";

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css'],
  providers: [ImportBooksService]
})
export class LivresComponent implements OnInit {
books:Book[];
  constructor(private importBooks: ImportBooksService) {
    this.importBooks.getBooks().subscribe((books)=>this.books=books);
  }

  ngOnInit() {
  }

}
