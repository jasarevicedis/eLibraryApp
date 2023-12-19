import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLoanComponent } from 'src/app/features/loans/components/add-loan/add-loan.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAddLoanService {

  constructor(private dialog: MatDialog) { }

  openAddLoan(): void {
    this.dialog.open(AddLoanComponent, {});
  }

}
