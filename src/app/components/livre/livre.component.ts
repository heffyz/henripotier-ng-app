import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../models/book";
import {SharedService} from "../../services/sharedService";

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input() livre: Book;
  @Input() synposis: string[] = [];
  @Output() PSevent = new EventEmitter();
  book: Book;
  quantity: number;
  cov: string;
  message: string;

  constructor(private sharedService: SharedService) {

  }

  ngOnInit() {
    this.quantity = 0;
    this.cov = "../../../assets/img/" + this.livre.cover;
    this.sharedService.currentMessage.subscribe(message => this.message = message);

    this.sharedService.currentBook.subscribe(book => this.book = book)
  }

  addQuantity() {

    this.quantity = 1;
    this.message = "1";
    this.sharedService.changeMessage(this.message);
    this.emitQuantity();
    alert("Le livre " + this.livre.title + " est ajouté au panier !")
  }

  emitQuantity() {
    this.PSevent.emit(this.quantity);
  }

  sendBook(b) {
    this.book = b;
    this.sharedService.changeBook(this.book);
  }
}
