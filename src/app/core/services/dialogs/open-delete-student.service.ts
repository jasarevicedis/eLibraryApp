import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from 'src/app/features/students/components/delete-student/delete-student.component';

@Injectable({
  providedIn: 'root'
})
export class OpenDeleteStudentService {

  constructor(private dialog: MatDialog) { }
  
  openDeleteStudent(): void {
    this.dialog.open(DeleteStudentComponent, {});
  }
}
