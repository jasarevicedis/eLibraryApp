import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatBadgeModule, MatIconModule,MatButtonModule, MatMenuModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isProfileClicked = false;
  isNotificationClicked = false;
  toggleProfileMenu(): void {    
    this.isProfileClicked = !this.isProfileClicked;
  }
  toggleNotificationMenu(): void {
    this.isNotificationClicked = !this.isNotificationClicked;
  }
}
