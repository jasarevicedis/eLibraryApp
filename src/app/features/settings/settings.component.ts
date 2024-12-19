import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './components/profile/profile.component';
import { AuditlogComponent } from '../auditlog/auditlog.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule,RouterModule, MatTabsModule,
  ProfileComponent, AuditlogComponent, GeneralSettingsComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

}
