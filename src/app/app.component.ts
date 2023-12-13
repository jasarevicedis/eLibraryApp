import { Component } from '@angular/core';
import { DarkmodeService } from './services/ui/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public darkModeService: DarkmodeService) {}
  title = 'eLibraryApp';
}
