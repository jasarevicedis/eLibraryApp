import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

import { OpenAddBookService } from '../../core/services/dialogs/open-add-book.service';
import { OpenAddBookInstanceService } from '../../core/services/dialogs/open-add-book-instance.service';
import { OpenEditCategoriesService } from '../../core/services/dialogs/open-edit-categories.service';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule, BookCardComponent, RouterModule,MatInputModule,
    MatFormFieldModule,MatSelectModule,MatPaginatorModule
  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  constructor(
    private openAddBookService: OpenAddBookService,
    private openAddInstancesService: OpenAddBookInstanceService,
    private openEditCategoriesService: OpenEditCategoriesService
  ) {}

  openAddBook(): void {
    this.openAddBookService.openAddBook();
  }
  openAddInstances(): void {
    this.openAddInstancesService.openAddBookInstance();
  }
  openEditCategories(): void {
    this.openEditCategoriesService.openEditCategories();
  }
}
