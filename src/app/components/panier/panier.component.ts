import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from "../../services/sharedService";
import {Product} from "../../models/product";
import {Book} from "../../models/book";
import {OfferComponent} from "../offer/offer.component";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  providers: []
})
export class PanierComponent implements OnInit {
  @ViewChild('dis') dis: OfferComponent;
  panier: Product[] = [];
  books: Book[] = [];
  total: number;
  hide: boolean = false;
  message: string;

  constructor(private importBooks: SharedService) {
    this.importBooks.getPanier().subscribe((panier) => this.panier = panier);

    this.importBooks.getBooks().subscribe((books) => this.books = books);


  }

  ngOnInit() {
    this.total = 0;
    this.importBooks.currentMessage.subscribe(message => this.message = message)
  }

  admonish() {
    return this.dis.callDiscount(this.calculatePrice());
  }

  calculatePrice(): number {
    let t = 0;
    let count = 0;
    if (this.panier.length != 0)
      for (let i: number = 0; i < this.panier.length; i++) {
        let b: Book;
        b = this.books.find(e => (e.isbn === this.panier[i].isbn));
        let price = b.price;
        t = t + (price * this.panier[i].quantity);
        count++;

        this.message = "1";
        this.importBooks.changeMessage(this.message);
      }
    return t;
  }

  getBookByIsbn(product): Book {
    return this.books.find(e => (e.isbn === product.isbn));
  }

  decrement(isbn, quantity) {
    quantity -= 1;
    let product = new Product(isbn, quantity);
    this.importBooks.modifProduct(product).subscribe(
      res => {
      }
    );
    if (quantity != 0) {
      this.setQuantity(isbn, -1);
      this.admonish();
    } else {

      this.message = "0";
      this.importBooks.changeMessage(this.message);
      location.reload();
    }

  }

  increment(isbn) {
    let quantity = 1;
    let product = new Product(isbn, quantity);
    this.importBooks.addProduct(product).subscribe(
      res => {
      }
    );
    this.setQuantity(isbn, 1);
    this.admonish();
  }

  remove(isbn) {
    let quantity = 0;
    let product = new Product(isbn, quantity);
    this.importBooks.modifProduct(product).subscribe(
      res => {
      }
    );

    this.message = "0";
    this.importBooks.changeMessage(this.message);
    location.reload();
    this.admonish();
  }

  setQuantity(isbn, q) {
    this.panier.find(e => (e.isbn === isbn)).quantity += q;
  }

  getHide() {
    this.hide = this.dis.hide;
    return this.hide;
  }

}
