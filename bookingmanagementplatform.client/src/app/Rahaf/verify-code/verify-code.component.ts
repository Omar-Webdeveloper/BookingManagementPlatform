import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css'],
  standalone: false
})
export class VerifyCodeComponent {
  verifyCodeForm: FormGroup;
  error: string | null = null;
  email: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.verifyCodeForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

    // Access the email using the index signature
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.email = navigation.extras.state['email'];
    }
  }

  submit() {
    if (this.verifyCodeForm.valid && this.email) {
      const code = this.verifyCodeForm.value.code;
      this.authService.verifyResetCode(this.email, code).subscribe({
        next: () => this.router.navigate(['/reset-password'], { state: { email: this.email } }),
        error: () => this.error = 'Invalid or expired code.'
      });
    }
  }
}
