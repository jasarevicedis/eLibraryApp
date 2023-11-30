import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './books/components/add-book/add-book.component';
import { AddStudentComponent } from './students/components/add-student/add-student.component';
import { AddLoanComponent } from './loans/components/add-loan/add-loan.component';
import { BookPageComponent } from './books/components/book-page/book-page.component';
import { AddInstancesComponent } from './books/components/add-instances/add-instances.component';
import { StudentPageComponent } from './students/components/student-page/student-page.component';
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
