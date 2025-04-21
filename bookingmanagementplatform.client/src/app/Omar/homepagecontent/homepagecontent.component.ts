import { Component } from '@angular/core';
import { UrlAdminService } from '../../AdminService/url-admin.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepagecontent',
  standalone: false,
  templateUrl: './homepagecontent.component.html',
  styleUrl: './homepagecontent.component.css'
})
export class HomepagecontentComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: UrlAdminService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const messageData = {
        ClinetName: this.contactForm.get('name')?.value,
        Email: this.contactForm.get('email')?.value,
        Title: this.contactForm.get('subject')?.value,
        Message: this.contactForm.get('message')?.value
      };

      this.contactService.sendContactMessage(messageData).subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            confirmButtonText: 'OK'
          });
          this.contactForm.reset();
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Failed to send message. Please try again.',
            confirmButtonText: 'OK'
          });
        }
      });
    }
  }





}
