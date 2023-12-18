import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenEditStudentService } from 'src/app/core/services/dialogs/open-edit-student.service';
import { OpenDeleteStudentService } from 'src/app/core/services/dialogs/open-delete-student.service';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent {
  constructor(
    private openEditStudentService: OpenEditStudentService,
    private openDeleteStudentService: OpenDeleteStudentService
  ) {}

  openEditStudent(event: Event): void {
    event.stopPropagation();
    this.openEditStudentService.openEditStudent();
  }
  openDeleteStudent(event: Event): void {
    event.stopPropagation();//prevents card to go to item page
    this.openDeleteStudentService.openDeleteStudent();
    
  }
}
