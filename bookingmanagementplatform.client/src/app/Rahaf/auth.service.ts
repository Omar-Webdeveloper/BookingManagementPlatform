import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'https://localhost:7297/api/User';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.url}/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.url}/login`, data);
  }

  sendResetCode(email: string): Observable<any> {
    return this.http.post(`${this.url}/forgot-password`, { email });
  }

  verifyResetCode(email: string, code: string): Observable<any> {
    return this.http.post(`${this.url}/verify-reset-code`, { email, code });
  }

  resetPassword(email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/reset-password`, { email, password });
  }

  googleLogin(user: SocialUser): Observable<any> {
    const formData = new FormData();
    formData.append('idToken', user.idToken);

    return this.http.post(`${this.url}/google-login`, formData);
  }

}
