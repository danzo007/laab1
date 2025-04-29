import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'cloud',
    loadComponent: () => import('./cloud/cloud.page').then( m => m.CloudPage)
  },
  {
    path: 'abstract-class',
    loadComponent: () => import('./abstract-class/abstract-class.page').then( m => m.AbstractClassPage)
  },
  {
    path: 'servicepage',
    loadComponent: () => import('./servicepage/servicepage.page').then( m => m.ServicepagePage)
  },{
    path: 'travel-page',
    loadComponent: () => import('./travel-page/travel-page.page').then( m => m.TravelPagePage)
  },
  {
    path: 'add-product',
    loadComponent: () => import('./add-product/add-product.page').then( m => m.AddProductPage)
  },
  {
    path: 'edit-product',
    loadComponent: () => import('./edit-product/edit-product.page').then( m => m.EditProductPage)
  },
  {
    path: 'filter',
    loadComponent: () => import('./filter/filter.page').then( m => m.FilterPage)
  },
];
