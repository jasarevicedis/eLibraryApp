import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentComponent } from 'src/app/students/components/edit-student/edit-student.component';

@Injectable({
  providedIn: 'root'
})
export class OpenEditStudentService {

  constructor(private dialog: MatDialog) { }
  openEditStudent(): void {
    this.dialog.open(EditStudentComponent, {}); 
  }
}
