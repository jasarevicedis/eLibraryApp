import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { StudentsComponent } from './students/students.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'loans', component: LoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
