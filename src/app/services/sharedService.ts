import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Book} from "../models/book";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product";
import {Offer} from "../models/offer";
import {Slice} from "../models/slice";
import {Serializer} from "../models/serializer";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class SharedService {
  private BASE_URL = 'http://localhost:8082';
  private SEND_BOOKS = `${this.BASE_URL}\\panier\\book`;
  private ADD_PRODUCT = `${this.BASE_URL}\\panier\\add`;
  private SHOW_PANIER = `${this.BASE_URL}\\panier\\show`;
  private MODIF_PRODUCT = `${this.BASE_URL}\\panier\\remove`;
  private OFFER_ONE = `${this.BASE_URL}\\promo\\offer\\1`;
  private OFFER_TWO = `${this.BASE_URL}\\promo\\offer\\2`;
  private serializer: Serializer;
  private messageSource = new BehaviorSubject('0');
  private bookSource = new BehaviorSubject<Book>(new Book('','',0,'',[]));
  currentBook = this.bookSource.asObservable();
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) {
  }

  sharedNode = 0;
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('../assets/listeDesLivres.json');
  }
getBook(isbn):Observable<Book>{
    return this.getBooks().map(b=>b.find(e=>e.isbn==isbn));
}
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeBook(b:Book){
    this.bookSource.next(b);
  }
  postBook(book: Book): Observable<any> {
    return this.http.post(this.SEND_BOOKS, book);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.ADD_PRODUCT, product);
  }

  getPanier(): Observable<Product[]> {
    return this.http.get<Product[]>(this.SHOW_PANIER);
  }

  modifProduct(product: Product): Observable<any> {
    return this.http.post(this.MODIF_PRODUCT, product);
  }

  getOffer1(): Observable<Offer> {
    return this.http.get<Offer>(this.OFFER_ONE);
  }

  getOffer2(): Observable<Slice[]> {
    return this.http.get<Slice[]>(this.OFFER_TWO);
  }


}
