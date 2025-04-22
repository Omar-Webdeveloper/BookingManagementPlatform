import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'https://localhost:7297/api/User';

  // تخزين الإيميل بالحالة
  userEmailSubject = new BehaviorSubject<string | null>(sessionStorage.getItem('Email'));
  userEmail$ = this.userEmailSubject.asObservable();

  // حالة تسجيل الدخول
  isLoggedInSubject = new BehaviorSubject<boolean>(!!sessionStorage.getItem('Email'));
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // موجود عندك مسبقًا - نستخدمه إذا بدنا نرسل قيمة عامة
  subject = new BehaviorSubject(''); // write
  user$ = this.subject.asObservable(); // read

  constructor(private http: HttpClient) { }

  // تسجيل الدخول
  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/login`, data);
  }

  // تسجيل
  register(data: any): Observable<any> {
    return this.http.post(`${this.url}/register`, data);
  }

  // إرسال كود استعادة كلمة مرور
  sendResetCode(email: string): Observable<any> {
    return this.http.post(`${this.url}/forgot-password`, { email });
  }

  // التحقق من الكود
  verifyResetCode(email: string, code: string): Observable<any> {
    return this.http.post(`${this.url}/verify-reset-code`, { email, code });
  }

  // إعادة تعيين كلمة المرور
  resetPassword(email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/reset-password`, { email, password });
  }

  // تسجيل دخول عبر Google
  googleLogin(user: SocialUser): Observable<any> {
    const formData = new FormData();
    formData.append('idToken', user.idToken);
    return this.http.post(`${this.url}/google-login`, formData);
  }

  // ✅ دالة لتحديث الحالة بعد تسجيل الدخول
  setLoginState(email: string) {
    sessionStorage.setItem('Email', email);
    this.userEmailSubject.next(email);
    this.isLoggedInSubject.next(true);
  }

  // ✅ تسجيل الخروج
  logout() {
    sessionStorage.clear();
    this.userEmailSubject.next(null);
    this.isLoggedInSubject.next(false);
  }
}
