import { Component } from '@angular/core';
import {Product} from "./models/product";
import {ImportBooksService} from "./services/import-books.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ImportBooksService]
})
export class AppComponent {
  title = 'app';
  panier:Product[]=[];
  notif:number=0;
  constructor(private importBooks: ImportBooksService){
    this.importBooks.getPanier().subscribe((panier)=>this.panier=panier);
    if(this.panier.length!=0){
      this.notif=1;
      console.log(this.notif);
    }
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
