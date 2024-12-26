import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DarkmodeService } from 'src/app/core/services/ui/darkmode.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule,MatBadgeModule, MatIconModule,MatButtonModule, MatMenuModule,RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  isProfileClicked = false;
  isNotificationClicked = false;
  
  constructor(private darkModeService: DarkmodeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
  toggleProfileMenu(): void {    
    this.isProfileClicked = !this.isProfileClicked;
  }
  toggleNotificationMenu(): void {
    this.isNotificationClicked = !this.isNotificationClicked;
  }
}
