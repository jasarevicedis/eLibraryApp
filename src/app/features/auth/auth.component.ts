import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { LoginResponse } from 'src/app/core/models/login-response';
import { LoginRequest } from 'src/app/core/models/login-request';
import { AuthService } from 'src/app/core/services/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  input: string | undefined = "";
  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  loginResponse: LoginResponse = {};
  loginRequest: LoginRequest = {};


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  constructor(private authService: AuthService, private router: Router){}

  login() 
  {
    this.input = this.loginForm.get('usernameOrEmail')?.value?.toString();
    
    this.loginRequest.email = this.input;
    // Mark all form controls as touched to display errors
    
    this.loginRequest.password = this.loginForm.get('pass')?.value;

    this.authService.login(this.loginRequest)
      .subscribe({
        next: (response) => {
          /*
          setTimeout(() => {
            this.router.navigate(['login']); ///logout after 30 minutes 
            localStorage.clear();
            this.expiredSessionPopup();
          }, 1000 * 60 * 30);*/
          this.loginResponse = response;
          console.log(response);
          
          localStorage.setItem('email', this.loginResponse.email as string);

          console.log(this.loginResponse.email)
          this.authService.setUserRole(response.role);
          if (response.role == 'SuperAdmin') {
            this.router.navigate(['/books']);
          }
          else {
            this.router.navigate(['']);
          }
          this.authService.getCurrentUser().subscribe((res  : any)=> {
            this.authService.user.next(res);
          })
          
        },
        error: error => {
          //this.showInvalid2FAPopup("Wrong password!");
      }
      });
      
  }
}
