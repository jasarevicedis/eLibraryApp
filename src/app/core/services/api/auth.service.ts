import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest } from '../../models/login-request';
import { LoginResponse } from '../../models/login-response';
import { UserRequest } from '../../models/user-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole: string | undefined= '';
  private apiUrl = "https://localhost:7180/api/Auth";
  private apiUserUrl = "https://localhost:7180/api/User";
  user : BehaviorSubject<UserRequest | null> = new BehaviorSubject<UserRequest | null>(null)

  constructor(private http: HttpClient, private router: Router) {
    this.userRole = localStorage.getItem('role') as string;
  }

  login(loginRequest: LoginRequest) 
  {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, loginRequest).pipe(
      tap(response => {
        localStorage.setItem('role', response.role as string);
        this.userRole = response.role;
        console.log("Role:" + this.userRole);
      })
    )
  }

  getCurrentUser():Observable<any>
  {
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUserUrl}/get-current-user`, { headers });
  }

  setUserRole(role: string | undefined) {
    this.userRole = role;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
    //this will clear refrsh token from cookies
    //document.cookie = "refresh=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
}
