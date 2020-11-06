import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';declare var __RevDeBug: any; /*tslint:disable*/const __revD0 = __RevDeBug.init("example-angular-heroes", "Angular Heroes Example", "0.0.0", "c=V6XOPb6Cg5bDXOd<a7WNWOXJXFhO", "0000000000000000", "127.0.0.1", 42735, 3, 2, 512, 3, 0, ";7<", "#57", "$5", "4v1&x*R2JB4g~4t@SQ+4%.y;0jGKPq:7", 0, "app/app-routing.module.ts");__revD0.es.push(__revD0.e);__revD0.a(0, __revD0.e = 0);

const routes: Routes = __revD0.v(2, [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: (__revD0.e = -4, DashboardComponent) },
{ path: 'detail/:id', component: (__revD0.e = -5, HeroDetailComponent) },
{ path: 'heroes', component: (__revD0.e = -6, HeroesComponent) }]);






@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })export class AppRoutingModule {}__revD0.v(1);__revD0.e = __revD0.es.pop();


//# sourceMappingURL=app-routing.module.ts.map
