import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookinghistorycontect',
  standalone: false,
  templateUrl: './bookinghistorycontect.component.html',
  styleUrls: ['./bookinghistorycontect.component.css']
})
export class BookinghistorycontectComponent {
  bookings: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const userId = 14; 
    this.http.get<any[]>(`https://localhost:7297/api/User/GetUserBookings/${userId}`)
      .subscribe({
        next: (res) => {
          this.bookings = res;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.error = err?.error?.message || 'Failed to fetch bookings.';
          this.loading = false;
        }
      });
  }

  getBadgeClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-warning text-dark';
      case 'confirmed':
        return 'bg-success';
      case 'cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  CancelBooking(id: number) {
    if (confirm("Are you sure you want to cancel this booking?")) {
      // استدعاء الميثود من UserController
      this.http.put(`https://localhost:7297/api/User/CancelBooking/${id}`, {}, { responseType: 'text' }).subscribe({
        next: (res) => {
          alert("Booking cancelled successfully.");
          this.getBookings(); // إعادة تحميل البيانات بعد إلغاء الحجز
        },
        error: (err) => {
          console.error("Error details:", err);
          alert("Failed to cancel booking.");
        }
      });

    }
  }

  
  getBookings() {
    // استدعاء الميثود لجلب البيانات من السيرفيس
    const userId = 1; // نفس الطريقة التي جلبت بها البيانات
    this.http.get<any[]>(`https://localhost:7297/api/User/GetUserBookings/${userId}`).subscribe({
      next: (res) => {
        this.bookings = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = err?.error?.message || 'Failed to fetch bookings.';
        this.loading = false;
      }
    });
  }
}

