import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registercontent',
  standalone: false,
  templateUrl: './registercontent.component.html',
  styleUrl: './registercontent.component.css'
})
export class RegistercontentComponent {
  constructor(private authService: AuthService) { }

  register(user: any) {
    const userData = new FormData();
    userData.append('FullName', user.FullName);
    userData.append('Email', user.Email);
    userData.append('PasswordHash', user.PasswordHash);
    userData.append('PhoneNumber', user.PhoneNumber);


    this.authService.register(userData).subscribe({
      next: res => {
        console.log('Success response:', res);
        alert('Registered successfully!');
      },
      error: err => {
        console.error('Error response:', err);
        alert('Registration failed.');
      }
    });
  }
}
