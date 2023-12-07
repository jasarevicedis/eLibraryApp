import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {
  itemsArray = new Array(20).fill(0);
}
