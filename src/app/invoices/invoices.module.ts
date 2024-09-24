import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InvoicesComponent],
  imports: [
    CommonModule,
    FormsModule 
  ],
  bootstrap: [InvoicesComponent]
})
export class InvoicesModule {}