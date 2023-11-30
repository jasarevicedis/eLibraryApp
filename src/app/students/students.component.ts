import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, StudentCardComponent, RouterModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

}
