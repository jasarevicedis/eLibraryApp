import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditBookComponent } from 'src/app/books/components/edit-book/edit-book.component';

@Injectable({
  providedIn: 'root'
})
export class OpenEditBookService {

  constructor(private dialog: MatDialog) { }

  openEditBook():void {
    this.dialog.open(EditBookComponent, {});
  }

}
