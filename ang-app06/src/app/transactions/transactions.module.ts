import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TxnsListComponent } from './txns-list/txns-list.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';


@NgModule({
  declarations: [TransactionsComponent, TxnsListComponent, TxnsFormComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule
  ]
})
export class TransactionsModule { }