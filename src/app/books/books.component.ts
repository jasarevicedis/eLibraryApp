import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookCardComponent, RouterModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  
}
