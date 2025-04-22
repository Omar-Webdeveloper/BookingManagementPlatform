import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Rahaf/auth.service';

@Component({
  selector: 'app-navabr',
  standalone: false,
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css'
})
export class NavabrComponent implements OnInit {
  isLoggedIn = false;
  loginneduser = true;
  email: string | null = null;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    // نتابع حالة الدخول
    this._auth.isLoggedIn$.subscribe((logged) => {
      this.isLoggedIn = logged;
    });

    // نتابع الإيميل
    this._auth.userEmail$.subscribe((email) => {
      this.email = email;

      // تحقق من دور الأدمن
      if (email === 'Admin@gmail.com') {
        this.loginneduser = false;
      } else {
        this.loginneduser = true;
      }
    });
  }

  logout(): void {
    this._auth.logout();
    window.location.href = '/login'; // إعادة توجيه لصفحة الدخول
  }
}
