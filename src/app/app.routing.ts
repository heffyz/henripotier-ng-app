import { ModuleWithProviders}
  from '@angular/core';
import { Routes, RouterModule}
  from '@angular/router';

import {LivresComponent} from "./components/livres/livres.component";
import {PanierComponent} from "./components/panier/panier.component";

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
  }
];

export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
