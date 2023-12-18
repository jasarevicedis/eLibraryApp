import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenEditBookService } from 'src/app/core/services/dialogs/open-edit-book.service';
import { OpenDeleteBookService } from 'src/app/core/services/dialogs/open-delete-book.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  constructor(
    private openEditBookService: OpenEditBookService,
    private openDeleteBookService: OpenDeleteBookService
  ) {}

  openEditBook(event: Event): void {
    event.stopPropagation();
    this.openEditBookService.openEditBook();
  }
  openDeleteBook(event: Event): void {
    event.stopPropagation();//prevents card to go to item page
    this.openDeleteBookService.openDeleteBook();
    
  }
}
