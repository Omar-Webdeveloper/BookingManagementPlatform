import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-resetpasswordcontent',
  standalone: false,
  templateUrl: './resetpasswordcontent.component.html',
  styleUrl: './resetpasswordcontent.component.css'
})
export class ResetpasswordcontentComponent {
  resetPasswordForm: FormGroup;
  error: string | null = null;
  email: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Using ActivatedRoute to retrieve state from navigation
    this.route.queryParams.subscribe(params => {
      this.email = params['email']; // Retrieve email passed in state
    });
  }

  submit() {
    if (this.resetPasswordForm.valid && this.email) {
      const password = this.resetPasswordForm.value.password;
      const confirmPassword = this.resetPasswordForm.value.confirmPassword;

      if (password !== confirmPassword) {
        this.error = 'Passwords do not match.';
        return;
      }

      this.authService.resetPassword(this.email, password).subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => this.error = 'Password reset failed.'
      });
    }
  }
}
