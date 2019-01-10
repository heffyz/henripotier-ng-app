import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from "../../models/offer";
import {Slice} from "../../models/slice";
import {SharedService} from "../../services/sharedService";
import {Product} from "../../models/product";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: []
})
export class OfferComponent implements OnInit {
  secondActive: number = -1;
  offer: Offer[] = [];
  slice: Slice[] = [];
  disountValue: number = 0;
  hide: boolean = false;
  showdetails: boolean = false;
  detailsValue: string;
  o: Offer;
  numberOfProducts: number = 0;
  @Input() totalPrice: number;
  @Input() panier: Product[];
  @Output() Hideevent = new EventEmitter();

  constructor(private importBooks: SharedService) {
    this.importBooks.getOffer1().subscribe((o) => {
      this.o = o;
    });

    this.importBooks.getOffer2().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].sliceValue === undefined) {
            let newOffer = new Offer(res[i].type, res[i].value);
            this.offer.push(newOffer);
            console.log(res[i].value);
          } else {
            this.slice.push(res[i]);
            console.log(res[i].value);
          }
        }
      }
    );
  }

  ngOnInit() {

    this.detailsValue = 'Plus';
    this.secondActive = -1;
  }

  callDiscount(p) {
    this.countDiscount(this.offer, this.slice, this.o, p);
    return this.disountValue;
  }

  countDiscount(offerfromhtml, slicefromhtml, o, price) {
    let count = 0;
    this.hide = true;
    let discount = 0;
    for (let i: number = 0; i < this.panier.length; i++) {
      count = count + this.panier[i].quantity;
    }
    this.numberOfProducts = count;
    if (count == 1) {
      let val: number;
      val = o.value;
      discount = price * (1 - val / 100);
      this.secondActive = 0;

    } else if (count > 1) {
      this.secondActive = 1;
      let c;
      let pvalue: number;
      let mvalue: number;
      let svalue2: number;
      let off: Offer;
      pvalue = offerfromhtml.find(e => (e.type === 'percentage')).value;
      mvalue = offerfromhtml.find(e => (e.type === 'minus')).value;
      svalue2 = slicefromhtml[0].sliceValue;
      discount = (price * (1 - pvalue / 100)) - mvalue;
      let v = slicefromhtml[0].value;
      c = (price / svalue2) - ((price % svalue2));
      if (c > 0)
        discount = discount - (v * c);
    }
    this.disountValue = discount;
  }

  offreEnFr(o) {
    if (o == 'percentage') {
      return "pourcentage"
    }
    if (o == 'minus') {
      return "bon"
    }
    if (o == 'slice') {
      return "tranche"
    }
  }

  detailValuechange() {
    if (this.detailsValue == 'Plus')
      this.detailsValue = 'Moins';
    else if (this.detailsValue == "Moins")
      this.detailsValue = "Plus";
  }
}
