import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";
import {ImportBooksService} from "../../services/import-books.service";
@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
@Input() livre: Book;
@Input() synposis:string[]=[];

cov:string;
  constructor() {
  }

  ngOnInit() {
    this.cov="../../../assets/img/"+this.livre.cover;
  }

}
