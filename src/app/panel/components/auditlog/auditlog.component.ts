import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auditlog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditlog.component.html',
  styleUrls: ['./auditlog.component.scss']
})
export class AuditlogComponent {
  itemsArray = new Array(20).fill(0);

}
