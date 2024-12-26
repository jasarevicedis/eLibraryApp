import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenEditMemberService } from 'src/app/core/services/dialogs/open-edit-member.service';
import { OpenDeleteMemberService } from 'src/app/core/services/dialogs/open-delete-member.service';


@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  constructor(
    private openEditMemberService: OpenEditMemberService,
    private openDeleteMemberService: OpenDeleteMemberService
  ) {}

  openEditMember(event: Event): void {
    event.stopPropagation();
    this.openEditMemberService.openEditMember();
  }
  openDeleteMember(event: Event): void {
    event.stopPropagation();//prevents card to go to item page
    this.openDeleteMemberService.openDeleteMember();
    
  }
  
}
