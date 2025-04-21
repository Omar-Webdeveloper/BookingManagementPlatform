import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingformcontent',
  standalone: false,
  templateUrl: './bookingformcontent.component.html',
  styleUrls: ['./bookingformcontent.component.css']
})
export class BookingformcontentComponent {
  bookingForm!: FormGroup;
  rooms: any[] = []; // تعريف المتغير هنا كـ array

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: [],
      BookingStartDate: [''],
      BookingStartTime: [''],
      BookingEndTime: [''] // فقط هذا الحقل يبقى
    });
    this.getRooms();
  }

  // This method sets the end date to be the same as the start date
  setEndDate() {
    const startDate = this.bookingForm.get('bookingStartDate')?.value;
    if (startDate) {
      this.bookingForm.patchValue({
        bookingEndDate: startDate // Automatically set end date to the start date
      });
    }
  }

  getRooms(): void {
    this.http.get<any[]>('https://localhost:7297/api/User/getAllrooms').subscribe({
      next: (rooms) => {
        this.rooms = rooms; // تعيين الغرف التي تم جلبها
      },
      error: (err) => {
        console.error('Error fetching rooms:', err);
        alert('Failed to fetch rooms.');
      }
    });
  }

  submitBooking() {
    debugger

    if (this.bookingForm.valid) {
      const selectedRoomId = this.bookingForm.get('roomId')?.value;
      const formData = this.bookingForm.value;
      formData.roomId = 5
      debugger
      this.http.post('https://localhost:7297/api/User/AddBooking', formData).subscribe({
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

  selectedRoomId :any
  getRoomId(event: Event): void {
    debugger
    const selectedRoomId = this.bookingForm.get('roomId')?.value;
     //selectedRoomId = (event.target as HTMLSelectElement).value;
    console.log('Selected Room ID:', selectedRoomId);

    // إذا بدك تخزنيه في متغير داخل الكلاس
    this.selectedRoomId = selectedRoomId;

    // وإذا بدك تجيبي كل بيانات الغرفة:
    const selectedRoom = this.rooms.find(room => room.id == selectedRoomId);
    console.log('Selected Room:', selectedRoom);
  }






//import { HttpClient } from '@angular/common/http';
//import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';

//@Component({
//  selector: 'app-bookingformcontent',
//  standalone: false,
//  templateUrl: './bookingformcontent.component.html',
//  styleUrl: './bookingformcontent.component.css'
//})
//export class BookingformcontentComponent {
//  bookingForm!: FormGroup;
//  rooms: any[] = []; // تعريف المتغير هنا كـ array

//  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

//  ngOnInit() {
//    this.bookingForm = this.fb.group({
//      roomId: ['', Validators.required],

//            BookingStartDate: [''],
//            BookingStartTime: [''],
//            BookingEndTime: [''] // فقط هذا الحقل يبقى
//    });
//    this.getRooms();

//  }
//    // This method sets the end date to be the same as the start date
//    setEndDate() {
//      const startDate = this.bookingForm.get('bookingStartDate')?.value;
//      if (startDate) {
//        this.bookingForm.patchValue({
//          bookingEndDate: startDate // Automatically set end date to the start date
//        });
//      }
//    }

//    getRooms(): void {
//      this.http.get<any[]>('https://localhost:7297/api/User/getAllrooms').subscribe({
//        next: (rooms) => {
//          this.rooms = rooms; // تعيين الغرف التي تم جلبها
//        },
//        error: (err) => {
//          console.error('Error fetching rooms:', err);
//          alert('Failed to fetch rooms.');
//        }
//      });
//    }

//    submitBooking() {
//      debugger

//      if (this.bookingForm.valid) {

//        const formData = this.bookingForm.value;
//        formData.roomId = 5
//        debugger
//        this.http.post('https://localhost:7297/api/User/AddBooking', formData).subscribe({
//          next: res => {
//            alert('Booking added successfully!');
//          },
//          error: err => {
//            console.error('Error:', err);

//            // الطريقة الآمنة لعرض الخطأ
//            const errorMsg = err?.error?.message || err?.error || 'Something went wrong';
//            alert('Error: ' + errorMsg);
//          }
//        });
//      }
//    }

}
