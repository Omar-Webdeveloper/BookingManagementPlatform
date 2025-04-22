import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private user_role: OmarserviceService
  ) { }

  login(user: any) {
    const userData = new FormData();
    userData.append('Email', user.Email);
    userData.append('PasswordHash', user.PasswordHash);
    debugger;
    this.authService.login(userData).subscribe((data) => {
      debugger;
      // ✅ تحديث الجلسة والـ BehaviorSubject بطريقة نظيفة
      this.authService.setLoginState(user.Email);

      // ✅ عرض رسالة نجاح
      Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome back to Edukate!',
        icon: 'success',
        confirmButtonText: 'Continue'
      });

      // ✅ توجيه حسب الدور
      if (user.Email == 'Admin@gmail.com') {
        this.router.navigate(['/AdminDashBoard/Users']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
