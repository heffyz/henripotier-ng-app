import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routing} from "./app.routing";
import { AppComponent } from './app.component';
import { LivreComponent } from './components/livre/livre.component';
import { LivresComponent } from './components/livres/livres.component';
import { PanierComponent } from './components/panier/panier.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OfferComponent } from './components/offer/offer.component';
import { LivreDetailComponent } from './components/livre-detail/livre-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    LivresComponent,
    PanierComponent,
    OfferComponent,
    LivreDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,AngularFontAwesomeModule, Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
