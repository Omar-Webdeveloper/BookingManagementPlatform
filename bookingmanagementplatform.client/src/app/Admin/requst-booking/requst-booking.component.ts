import { Component } from '@angular/core';
import { AdminDashBoredComponent } from '../admin-dash-bored/admin-dash-bored.component';
import { UrlAdminService } from '../../AdminService/url-admin.service';

@Component({
  selector: 'app-requst-booking',
  standalone: false,
  templateUrl: './requst-booking.component.html',
  styleUrl: './requst-booking.component.css'
})
export class RequstBookingComponent {
  constructor(private _ser: UrlAdminService) { }
  ngOnInit() {
    this.getrequst();
  }

  dataT: any;
  getrequst() {
    this._ser.getAllRequst().subscribe((data: any) => {
      this.dataT = data;
    })
  }


  rejectBooking(id: any, data: any) {
    const body = {
      status: data  // أو حسب اسم الخاصية المطلوبة في DTO
    };

    this._ser.UpdateRequst(id, body).subscribe(() => {
      this.getrequst();
      alert("Booking Rejected");
    })

  }

  approveBooking(id: any, data: any) {
    const body = {
      status: data  // أو حسب اسم الخاصية المطلوبة في DTO
    };
    this._ser.UpdateRequst(id, body).subscribe(() => {
      this.getrequst();
      alert("Booking approved");
    })

  }
}
