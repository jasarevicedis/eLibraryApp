import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, MemberCardComponent, RouterModule],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {

}
