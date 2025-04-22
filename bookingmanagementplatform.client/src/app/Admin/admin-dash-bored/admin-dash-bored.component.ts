import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dash-bored',
  standalone: false,
  templateUrl: './admin-dash-bored.component.html',
  styleUrl: './admin-dash-bored.component.css'
})
export class AdminDashBoredComponent {

  logout(): void {
    sessionStorage.clear();
    // ممكن تضيف توجيه للصفحة الرئيسية أو صفحة تسجيل الدخول بعد تسجيل الخروج
    window.location.href = '/login'; // عدّل الرابط حسب مسار مشروعك
  }

}
