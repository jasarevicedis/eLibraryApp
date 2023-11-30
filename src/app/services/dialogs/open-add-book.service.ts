import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from 'src/app/books/components/add-book/add-book.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAddBookService {

  constructor(private dialog: MatDialog) { }

  openAddBook(): void {
    this.dialog.open(AddBookComponent, {});
  }

}
