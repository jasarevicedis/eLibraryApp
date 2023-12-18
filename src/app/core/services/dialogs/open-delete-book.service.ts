import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBookComponent } from 'src/app/features/books/components/delete-book/delete-book.component';


@Injectable({
  providedIn: 'root'
})
export class OpenDeleteBookService {

  constructor(private dialog: MatDialog) { }

  openDeleteBook(): void {
    this.dialog.open(DeleteBookComponent, {});
  }

}
