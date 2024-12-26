import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OpenAddLoanService } from 'src/app/core/services/dialogs/open-add-loan.service';
import { OpenEditLoanService } from 'src/app/core/services/dialogs/open-edit-loan.service';
import { TableModule } from 'primeng/table';
//import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
//import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { Loan } from 'src/app/core/models/Loan';
import {MatTableModule} from '@angular/material/table';
import { LoanStatus } from 'src/app/core/models/LoanStatus';

const ELEMENT_DATA: Loan[] = [
  {
    id: "12",
    user: {id: "1", firstName:"User1", lastName: "Prezime1"},
    book: {id: "111", title: "Harrrrrryy", author: "Jack Grealish"},
    loanDate: new Date(),
    status: LoanStatus.ACTIVE
  },
  {
    id: "13",
    user: {id: "2", firstName:"User2", lastName: "Prezime2"},
    book: {id: "222", title: "Sonnyyy", author: "Branko Copic"},
    loanDate: new Date(),
    status: LoanStatus.ACTIVE
  },
  {
    id: "14",
    user: {id: "3", firstName:"User3", lastName: "Prezime3"},
    book: {id: "333", title: "Williams", author: "Ivo Andric"},
    loanDate: new Date(),
    status: LoanStatus.ACTIVE
  }
];

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, TableModule, MatTableModule,
    TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, RatingModule, InputTextModule, FormsModule, InputNumberModule
   ],
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {

  displayedColumns = ['id', 'student', 'book', 'status'];
  dataSource = ELEMENT_DATA;

    loans!: Loan[];

    loan!: Loan;

    selectedLoans!: Loan[] | null;

    submitted: boolean = false;

    statuses!: any[];
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
