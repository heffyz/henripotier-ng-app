import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
@Input() livre: Book;
@Input() synposis:string[]=[];
@Output() PSevent = new EventEmitter();
quantity:number;
cov:string;
  constructor() {
  }

  ngOnInit() {
    this.quantity=0;
    this.cov="../../../assets/img/"+this.livre.cover;
  }

  addQuantity(){
    this.quantity=1;
    this.emitQuantity()
  }

  emitQuantity(){
    this.PSevent.emit(this.quantity);
  }
}
