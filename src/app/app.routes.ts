import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'noticia1',
    loadComponent: () => import('./noticias/noticia1/noticia1.page').then( m => m.Noticia1Page)
  },
];
