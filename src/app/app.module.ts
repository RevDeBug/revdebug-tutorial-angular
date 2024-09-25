import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module'; 
import { appRoutes } from './app.routes'; 
import { InvoicesModule } from './invoices/invoices.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule, 
    InvoicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
