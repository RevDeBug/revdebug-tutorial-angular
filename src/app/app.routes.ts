import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { InvoicesComponent } from './invoices/invoices.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'invoices-tutorial', component: InvoicesComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
