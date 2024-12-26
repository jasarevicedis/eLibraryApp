import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditMemberComponent } from 'src/app/features/members/components/edit-member/edit-member.component';

@Injectable({
  providedIn: 'root'
})
export class OpenEditMemberService {

  constructor(private dialog: MatDialog) { }
  
  openEditMember(): void {
    this.dialog.open(EditMemberComponent, {}); 
  }
}
