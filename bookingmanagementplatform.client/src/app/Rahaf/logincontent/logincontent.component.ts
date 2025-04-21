import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-logincontent',
  standalone: false,
  templateUrl: './logincontent.component.html',
  styleUrl: './logincontent.component.css'
})
export class LogincontentComponent {

  constructor(private authService: AuthService, private router: Router) { }

  login(user: any) {
    const userData = new FormData();
    userData.append('Email', user.Email);
    userData.append('PasswordHash', user.PasswordHash);

    this.authService.login(userData).subscribe(
      {
        next: res => {
          sessionStorage.setItem('Email', res.Email);
          // Display SweetAlert2 success notification
          Swal.fire({
            title: 'Login Successful!',
            text: 'Welcome back to Edukate!',
            icon: 'success',
            confirmButtonText: 'Continue'
          });
        },
        error: err => {
          console.error('Login error:', err);

          // Display SweetAlert2 error notification
          Swal.fire({
            title: 'Login Failed!',
            text: 'Invalid email or password. Please try again.',
            icon: 'error',
            confirmButtonText: 'Retry'

          });
        }
      }
    )
  }

  loginWithGoogle(): void {
    console.log('Google login button clicked!');
    this.authService.login(GoogleLoginProvider.PROVIDER_ID).subscribe((user: SocialUser) => {
      console.log('Google user:', user);

      this.authService.googleLogin(user).subscribe({
        next: res => {
          
          alert('Google login successful!');
          console.log(res);
        },
        error: err => {
          console.error(err);
          alert('Google login failed.');
        }
      });
    });
  }
}
