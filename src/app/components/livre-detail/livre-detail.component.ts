import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/sharedService";
import {Book} from "../../models/book";
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from "rxjs";
import {Product} from "../../models/product";

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css']
})
export class LivreDetailComponent implements OnInit {
  book: Book;
  book$: Observable<Book>;

  message: string;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.message = message);
    this.sharedService.currentBook.subscribe(book => this.book = book);
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.sharedService.getBook(params.get('id')))
    );
    this.book$.subscribe(book => this.book = book);

  }

  addProduct(b) {

    this.message = "1";
    this.sharedService.changeMessage(this.message);
    this.sharedService.addProduct(new Product(b.isbn, 1)).subscribe();
  }
}
