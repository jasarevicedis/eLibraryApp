import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './components/profile/profile.component';
import { AuditlogComponent } from './components/auditlog/auditlog.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule,RouterModule, MatTabsModule,
  ProfileComponent, AuditlogComponent, SettingsComponent],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

}
