import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  isDarkMode = false;
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
