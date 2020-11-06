import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';declare var __RevDeBug: any; /*tslint:disable*/const __revD2 = __RevDeBug.init("example-angular-heroes", "Angular Heroes Example", "0.0.0", "c=V6XOPb6Cg5bDXOd<a7WNWOXJXFhO", "0000000000000000", "127.0.0.1", 42735, 3, 2, 512, 6, 6, ";787:5", "C5759?", "*5", "4v1&x*R2JB4g~4t@SQ+4%.y;0jGKPq:7", 0, "app/app.module.ts");__revD2.es.push(__revD2.e);__revD2.a(0, __revD2.e = 6);

class MyErrorHandler implements ErrorHandler {// This necessary to catch unhandled exceptions
  handleError(this: any, error) {let __revDT0: any, __revDE: any;try {__revD2.a(0, error, __revDE = 8);
      __revD2.a((([__revDT0 = (__revDE = -14, console), __revDE = -15][0] as any).error, __revDT0), __revDT0 = (__revDE = -16, error), __revDE = 10).error(__revDT0);
      __revD2.a((([__revDT0 = (__revDE = -19, __revD2), __revDE = -20][0] as any).unhandled, __revDT0), __revDT0 = (__revDE = -21, error), __revDE = 11).unhandled(__revDT0, -17);__revD2.v(9);
    } catch (__revDErr) {throw __revD2.c(__revDE, __revDErr);}}}


















@NgModule({ providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }], imports: [BrowserModule, FormsModule, AppRoutingModule], declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, MessagesComponent], bootstrap: [AppComponent] })export class AppModule {}__revD2.v(7);__revD2.e = __revD2.es.pop();


//# sourceMappingURL=app.module.ts.map
