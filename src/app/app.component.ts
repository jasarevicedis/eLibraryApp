import { Component } from '@angular/core';
import { DarkmodeService } from './core/services/ui/darkmode.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [SidebarComponent, HeaderComponent, RouterOutlet, HttpClientModule]
})
export class AppComponent {
  constructor(public darkModeService: DarkmodeService) {}
  title = 'eLibraryApp';
}
