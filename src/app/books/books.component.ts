import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';


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
  
}
