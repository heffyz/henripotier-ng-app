import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImportBooksService {

  constructor(private http: Http) { }
  getBooks(){
    return this.http.get('../assets/listeDesLivres.json').map(res => res.json());
  }
}
