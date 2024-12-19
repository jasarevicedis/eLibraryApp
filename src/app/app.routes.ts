import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BooksComponent } from './features/books/books.component';
import { BookPageComponent } from './features/books/components/book-page/book-page.component';
import { StudentsComponent } from './features/students/students.component';
import { StudentPageComponent } from './features/students/components/student-page/student-page.component';
import { LoansComponent } from './features/loans/loans.component';
import { AuthComponent } from './features/auth/auth.component';
import { SettingsComponent } from './features/settings/settings.component';
import { ProfileComponent } from './features/settings/components/profile/profile.component';
import { GeneralSettingsComponent } from './features/settings/components/general-settings/general-settings.component';
import { NotificationsSettingsComponent } from './features/settings/components/notifications-settings/notifications-settings.component';
import { AuditlogComponent } from './features/settings/components/auditlog/auditlog.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path: 'books/1', component: BookPageComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/1', component: StudentPageComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'login', component: AuthComponent, data: {showHeaderAndSidebar: false}},
  {path: 'panel', component: SettingsComponent, children:[
    {path:'profile', component: ProfileComponent},
    {path:'settings', component: GeneralSettingsComponent},
    {path: 'notifications', component: NotificationsSettingsComponent},
    {path:'auditlog', component:AuditlogComponent}
  ]}
];