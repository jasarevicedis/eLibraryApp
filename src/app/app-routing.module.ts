import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from './students/students.component';
import { LoansComponent } from './loans/loans.component';
import { BookPageComponent } from './books/components/book-page/book-page.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path: 'books/1', component: BookPageComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'loans', component: LoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
