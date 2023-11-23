import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './components/student-card/student-card.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, StudentCardComponent],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

}
