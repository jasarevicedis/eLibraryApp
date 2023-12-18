import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddInstancesComponent } from 'src/app/features/books/components/add-instances/add-instances.component';

@Injectable({
  providedIn: 'root'
})
export class OpenAddBookInstanceService {

  constructor(private dialog: MatDialog) {
      
  }
  openAddBookInstance(): void {
    this.dialog.open(AddInstancesComponent, {});
  }

}
