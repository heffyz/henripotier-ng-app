import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Book} from "../models/book";
import {Observable} from "rxjs";

@Injectable()
export class ImportBooksService {
  private BASE_URL="localhost:8082";
  private SEND_BOOKS ='${this.BASE_URL}\\panier\\book';
  constructor(private http: HttpClient) { }
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>('../assets/listeDesLivres.json');
  }
  postBook(book:Book):Observable<any>{
    return this.http.post(this.SEND_BOOKS,book);
  }
}
