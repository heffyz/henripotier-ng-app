import { ModuleWithProviders}
  from '@angular/core';
import { Routes, RouterModule}
  from '@angular/router';

import {LivresComponent} from "./components/livres/livres.component";
import {PanierComponent} from "./components/panier/panier.component";
import {LivreDetailComponent} from "./components/livre-detail/livre-detail.component";

const appRoutes: Routes = [
  {
    path: '',
    component: LivresComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
  ,
  {
    path: 'panier',
    component: PanierComponent
  },
  {
    path: 'book/:id',
    component: LivreDetailComponent
  }
];

export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
