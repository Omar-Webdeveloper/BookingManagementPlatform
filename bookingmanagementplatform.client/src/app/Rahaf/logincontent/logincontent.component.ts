import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OmarserviceService } from '../../Omar/Service/omarservice.service';
@Component({
  selector: 'app-logincontent',
  standalone: false,
  templateUrl: './logincontent.component.html',
  styleUrl: './logincontent.component.css'
})
export class LogincontentComponent {
  loginneduser: any;
  role: any;
  constructor(private authService: AuthService, private router: Router, private user_role: OmarserviceService) { }

  login(user: any) {
    const userData = new FormData();
    userData.append('Email', user.Email);
    userData.append('PasswordHash', user.PasswordHash);
    this.authService.login(userData).subscribe((datass) => {

    this.authService.login(userData).subscribe((data) => {
      //debugger
      sessionStorage.setItem('Email', user.Email);
      this.user_role.Get_User_INfo(user.Email).subscribe((res) => {
        this.loginneduser = res; this.role = this.loginneduser.Role;
        sessionStorage.setItem("role", this.role);
 });
      // Display SweetAlert2 success notification
      Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome back to Edukate!',
        icon: 'success',
        confirmButtonText: 'Continue'
      });

      this.router.navigate(['']);
      ///end
    })
    
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
