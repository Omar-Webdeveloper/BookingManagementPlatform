import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingformcontent',
  standalone: false,
  templateUrl: './bookingformcontent.component.html',
  styleUrl: './bookingformcontent.component.css'
})
export class BookingformcontentComponent {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: ['', Validators.required],
      bookingDate: [''],
      bookingTime: [''],
      bookingStartDate: ['', Validators.required],
      bookingStartTime: ['', Validators.required],
      bookingEndDate: ['', Validators.required],
      bookingEndTime: ['', Validators.required]
    });
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;

      this.http.post('https://your-api.com/AddBooking', formData).subscribe({
        next: res => {
          alert('Booking added successfully!');
        },
        error: err => {
          console.error('Error:', err);

          // الطريقة الآمنة لعرض الخطأ
          const errorMsg = err?.error?.message || err?.error || 'Something went wrong';
          alert('Error: ' + errorMsg);
        }
      });
    }
  }

}
