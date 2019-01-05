import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
@Input() book: Book;
  constructor() { }

  ngOnInit() {
  }

}
