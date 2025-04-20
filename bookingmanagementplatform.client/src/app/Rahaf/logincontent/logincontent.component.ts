import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
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

    this.authService.login(userData).subscribe({
      next: res => {
        console.log('Login response:', res);
        alert('Login successful!');
      },
      error: err => {
        console.error('Login error:', err);
        alert('Invalid credentials.');
      }
    });
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
