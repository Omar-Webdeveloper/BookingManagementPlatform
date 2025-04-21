import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-room',
  standalone: false,
  templateUrl: './edit-room.component.html',
  styleUrl: './edit-room.component.css'
})
export class EditRoomComponent {

  constructor(private _admin: AdminService, private _Route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.RoomId = this._Route.snapshot.paramMap.get('id');

    this._admin.GetRoomByID(this.RoomId).subscribe((data:any) => {
  this.Room = data;
    });

    this.GetAllCategories();
  }

  AllCategories: any
  GetAllCategories() {
    this._admin.GetAllRoomsCategories().subscribe((data: any) => {
      this.AllCategories = data;
      console.log()
    });
  }

  Room:any

  RoomId: any

  EditRoom(Room: any) {
    const formData = new FormData();

    formData.append("ServiceName", Room.ServiceName?.toString() ?? '');
    formData.append("Description", Room.Description?.toString() ?? '');
    formData.append("Price", Room.Price?.toString() ?? '');
    formData.append("Duration", Room.Duration?.toString() ?? '');
    formData.append("CategoryId", Room.CategoryId?.toString() ?? '');
    formData.append("ServiceImage", Room.ServiceImage);
    formData.append("Location", Room.Location?.toString() ?? '');
    formData.append("Capacity", Room.Capacity?.toString() ?? '');
    formData.append("Seating", Room.Seating?.toString() ?? '');
    formData.append("MusicLevel", Room.MusicLevel?.toString() ?? '');
    formData.append("ViewLook", Room.ViewLook?.toString() ?? '');
    formData.append("Lighting", Room.Lighting?.toString() ?? '');

    this._admin.editRoom(this.RoomId, formData).subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Room updated successfully!',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/AdminDashBoard/AllRooms']);
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Update failed',
          text: 'Please check your input and try again.'
        });
      }
    });
  }



 





}
