import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  imports: [
    RouterModule
  ],
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent {

}
