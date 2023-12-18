import { Component } from '@angular/core';
import { DarkmodeService } from './core/services/ui/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public darkModeService: DarkmodeService) {}
  title = 'eLibraryApp';
}
