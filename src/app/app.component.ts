import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product";
import {SharedService} from "./services/sharedService";
import {Book} from "./models/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent implements OnInit{
  title = 'app';
  panier: Product[] = [];
  books:Book[]=[];
  message:string;

  constructor(private importBooks: SharedService) {
    this.importBooks.getPanier().subscribe((panier) => this.panier = panier);
    if (this.panier.length != 0) {
      this.message ="1";
    }




  }
  ngOnInit(): void {
    this.importBooks.currentMessage.subscribe(message => this.message = message);

  }

  onActivate(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);

  }



}
