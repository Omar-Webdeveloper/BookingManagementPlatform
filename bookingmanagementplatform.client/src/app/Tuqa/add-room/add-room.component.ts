import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-room',
  standalone: false,
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {

  ngOnInit() {
    this.GetAllCategories();
  }

  
  constructor(private _admin: AdminService, private router: Router) { }

  AllCategories: any
  GetAllCategories() {
    this._admin.GetAllRoomsCategories().subscribe((data: any) => {
      this.AllCategories = data;
      console.log()
    });
  }
  Room: any = {};
  AddRoom(Room: any) {
    debugger
    const formData = new FormData();

    formData.append("ServiceName", Room.ServiceName?.toString() ?? '');
    formData.append("Description", Room.Description?.toString() ?? '');
    formData.append("Price", Room.Price?.toString() ?? '');
    formData.append("Duration", Room.Duration?.toString() ?? '');
    formData.append("CategoryId", Room.CategoryId?.toString() ?? '');
    formData.append("ServiceImage", Room.ServiceImage?.toString() ?? '');
    formData.append("Location", Room.Location?.toString() ?? '');
    formData.append("Capacity", Room.Capacity?.toString() ?? '');
    formData.append("Seating", Room.Seating?.toString() ?? '');
    formData.append("MusicLevel", Room.MusicLevel?.toString() ?? '');
    formData.append("ViewLook", Room.ViewLook?.toString() ?? '');
    formData.append("Lighting", Room.Lighting?.toString() ?? '');

    console.log(formData);
    this._admin.AddRoom(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Room Added',
          text: 'The room has been added successfully!',
          timer: 1500,
          showConfirmButton: false
        });
        this.router.navigate(['/AllRooms']);
      },
      error: (err) => {
        console.error("Server error:", err.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: err?.error?.title || 'Something went wrong while adding the room.',

         

        });
      }
    });
  }

  



}
