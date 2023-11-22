import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../books/components/book-card/book-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
