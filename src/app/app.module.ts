import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './features/books/components/add-book/add-book.component';
import { AddStudentComponent } from './features/students/components/add-student/add-student.component';
import { AddLoanComponent } from './features/loans/components/add-loan/add-loan.component';
import { BookPageComponent } from './features/books/components/book-page/book-page.component';
import { AddInstancesComponent } from './features/books/components/add-instances/add-instances.component';
import { StudentPageComponent } from './features/students/components/student-page/student-page.component';
import { UploaderModule } from "angular-uploader";


@NgModule({
  declarations: [
    AppComponent,
    
    AddStudentComponent,
    AddLoanComponent,
    
    
    
  ],
  imports: [
    AddBookComponent,
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    SidebarComponent,
    BrowserAnimationsModule,
    MatDialogModule,
    AddInstancesComponent,
    BookPageComponent,
    StudentPageComponent,
    UploaderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
