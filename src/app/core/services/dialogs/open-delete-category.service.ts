import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryComponent } from 'src/app/features/books/components/delete-category/delete-category.component';

@Injectable({
  providedIn: 'root'
})
export class OpenDeleteCategoryService {

  constructor(private dialog: MatDialog) { }
  
  openDeleteCategory(): void {
      this.dialog.open(DeleteCategoryComponent, {});
  }
}
