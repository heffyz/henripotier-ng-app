import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LivreComponent } from './components/livre/livre.component';
import { LivresComponent } from './components/livres/livres.component';
import { PanierComponent } from './components/panier/panier.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    LivresComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
