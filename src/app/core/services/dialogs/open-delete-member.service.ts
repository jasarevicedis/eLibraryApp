import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMemberComponent } from 'src/app/features/members/components/delete-member/delete-member.component';

@Injectable({
  providedIn: 'root'
})
export class OpenDeleteMemberService {

  constructor(private dialog: MatDialog) { }
  
  openDeleteMember(): void {
    this.dialog.open(DeleteMemberComponent, {});
  }
}
