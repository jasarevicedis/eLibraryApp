import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from './students/students.component';
import { LoansComponent } from './loans/loans.component';
import { BookPageComponent } from './books/components/book-page/book-page.component';
import { StudentPageComponent } from './students/components/student-page/student-page.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path: 'books/1', component: BookPageComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/1', component: StudentPageComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
