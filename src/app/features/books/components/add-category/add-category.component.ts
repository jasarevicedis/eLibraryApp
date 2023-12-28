import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  constructor(
    private dialogRef: MatDialogRef<AddCategoryComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

