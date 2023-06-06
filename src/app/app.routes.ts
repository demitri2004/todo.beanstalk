import { Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'item', component: ItemComponent
  },
];
