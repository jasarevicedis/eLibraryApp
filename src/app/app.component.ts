import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './core/services/ui/darkmode.service';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [SidebarComponent, HeaderComponent, RouterOutlet, HttpClientModule, CommonModule, ReactiveFormsModule]
})
export class AppComponent  {
  title = 'eLibraryApp';
  showHeaderAndSidebar: Boolean = true;

  constructor(public darkModeService: DarkmodeService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showHeaderAndSidebar = this.activatedRoute?.firstChild?.snapshot.data['showHeaderAndSidebar'] !== false;
    });
  }

  
  
}
