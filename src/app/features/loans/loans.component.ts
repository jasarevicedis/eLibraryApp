import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OpenAddLoanService } from 'src/app/core/services/dialogs/open-add-loan.service';
import { OpenEditLoanService } from 'src/app/core/services/dialogs/open-edit-loan.service';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {
  itemsArray = new Array(20).fill(0);
  constructor(
    private openAddLoanService: OpenAddLoanService,
    private openEditLoanService: OpenEditLoanService
  ){}

  openAddLoan(): void {
    this.openAddLoanService.openAddLoan();
  }
  openEditLoan(): void {
    this.openEditLoanService.openEditLoan();
  }
}
