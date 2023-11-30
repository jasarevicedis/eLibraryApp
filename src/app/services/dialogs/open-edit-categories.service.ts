import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesDialogComponent } from 'src/app/books/components/categories-dialog/categories-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class OpenEditCategoriesService {

  constructor(private dialog: MatDialog) { }
  
  openEditCategories(): void {
    this.dialog.open(CategoriesDialogComponent, {});
  }

}
