import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookComponent } from './books/components/add-book/add-book.component';
import { AddStudentComponent } from './students/components/add-student/add-student.component';
import { AddLoanComponent } from './loans/components/add-loan/add-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    AddStudentComponent,
    AddLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    SidebarComponent,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
