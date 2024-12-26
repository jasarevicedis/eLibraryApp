import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './core/services/ui/darkmode.service';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AdminHeaderComponent } from './core/layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './core/layout/admin-sidebar/admin-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from "./core/layout/header/header.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [AdminSidebarComponent, AdminHeaderComponent, RouterOutlet, HttpClientModule, CommonModule, ReactiveFormsModule, HeaderComponent]
})
export class AppComponent  {
  title = 'eLibraryApp';
  showAdminHeaderAndSidebar: Boolean = true;
  showUserHeader: Boolean = true;

  constructor(public darkModeService: DarkmodeService, private router: Router,private activatedRoute: ActivatedRoute) {
    /*this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showAdminHeaderAndSidebar = this.activatedRoute?.firstChild?.snapshot.data['showHeaderAndSidebar'] !== false;
      this.showUserHeader = this.activatedRoute?.firstChild?.snapshot.data['showUserHeader'] !== false;

    });*/

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.getCurrentRoute(this.activatedRoute);
      this.showAdminHeaderAndSidebar = currentRoute.snapshot.data['showAdminHeaderAndSidebar'] !== false;
      this.showUserHeader = currentRoute.snapshot.data['showUserHeader'] !== false;
    });


  }

  private getCurrentRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  
  
}
