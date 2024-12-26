import { Routes } from '@angular/router';
import { AdminHomeComponent } from './features/admin-home/admin-home.component';
import { BooksComponent } from './features/books/books.component';
import { BookPageComponent } from './features/books/components/book-page/book-page.component';
import { MembersComponent } from './features/members/members.component';
import { MemberPageComponent } from './features/members/components/member-page/member-page.component';
import { LoansComponent } from './features/loans/loans.component';
import { AuthComponent } from './features/auth/auth.component';
import { PanelComponent } from './features/panel/panel.component';
import { ProfileComponent } from './features/panel/components/profile/profile.component';
import { SettingsComponent } from './features/panel/components/settings/settings.component';
import { NotificationsComponent } from './features/panel/components/notifications/notifications.component';
import { AuditlogComponent } from './features/panel/components/auditlog/auditlog.component';
import { UserHomeComponent } from './features/user-home/user-home.component';

export const routes: Routes = [
    {path:'', component: AdminHomeComponent},
    { path: 'home', component: UserHomeComponent, data: { showUserHeader: true, showAdminHeaderAndSidebar: false } },
  {path:'books', component: BooksComponent},
  {path: 'books/1', component: BookPageComponent},
  {path: 'students', component: MembersComponent},
  {path: 'students/1', component: MemberPageComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'login', component: AuthComponent, data: {showAdminHeaderAndSidebar: false}},
  {path: 'panel', component: PanelComponent, children:[
    {path:'profile', component: ProfileComponent},
    {path:'settings', component: SettingsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path:'auditlog', component:AuditlogComponent}
  ]},
  
];