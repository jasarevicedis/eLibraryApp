import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from 'src/app/features/books/components/add-category/add-category.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAddCategoryService {

  constructor(private dialog: MatDialog) { }
  
  openAddCategory(): void {
      this.dialog.open(AddCategoryComponent, {});
  }
}
