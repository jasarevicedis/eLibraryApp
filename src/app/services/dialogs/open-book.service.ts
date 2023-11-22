import { Injectable } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BookPageComponent } from 'src/app/books/components/book-page/book-page.component';

@Injectable({
  providedIn: 'root'
})
export class OpenBookService {

  constructor(private dialog: MatDialog) { }
  
  openBookItemPage(): void {
    this.dialog.open(BookPageComponent, {});
  }
}
