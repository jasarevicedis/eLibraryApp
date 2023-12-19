import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditLoanComponent } from 'src/app/features/loans/components/edit-loan/edit-loan.component';

@Injectable({
  providedIn: 'root'
})
export class OpenEditLoanService {

  constructor(private dialog: MatDialog) { }

  openEditLoan(): void {
    this.dialog.open(EditLoanComponent, {});
  }
}
