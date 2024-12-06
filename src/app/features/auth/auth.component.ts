import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { LoginResponse } from 'src/app/core/models/login-response';
import { LoginRequest } from 'src/app/core/models/login-request';
import { AuthService } from 'src/app/core/services/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  input: string | undefined = "";
  loginForm: FormGroup;

  loginResponse: LoginResponse = {};
  loginRequest: LoginRequest = {};


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }

  constructor(private authService: AuthService, private router: Router,private f: FormBuilder){
    this.loginForm = this.f.group({
      usernameOrEmail: [ '',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
    });
  }

  login() 
  {
    const input = this.loginForm.get('usernameOrEmail')?.value?.toString();
    this.loginRequest.username = input;

    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.loginRequest.password = this.loginForm.get('password')?.value;

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
          
          localStorage.setItem('username', this.loginResponse.username as string);

          console.log(this.loginResponse.email)
          /*
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
          */
          this.router.navigate(['']);
        },
        error: error => {
          //this.showInvalid2FAPopup("Wrong password!");
      }
      });
      
  }

  get emailOrUsernameControl() {
    return this.loginForm.get('usernameOrEmail')
  }
  get passControl() {
    return this.loginForm.get('password');
  }
}
