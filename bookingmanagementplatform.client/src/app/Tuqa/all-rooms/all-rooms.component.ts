import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-rooms',
  standalone: false,
  templateUrl: './all-rooms.component.html',
  styleUrl: './all-rooms.component.css'
})
export class AllRoomsComponent {


  ngOnInit() {
    this.GetAllRooms();
  }

  constructor(private _admin: AdminService) { }

  RoomsContainer: any

  GetAllRooms() {
    this._admin.GetAllRooms().subscribe((data: any) => {
      this.RoomsContainer = data;
    });
  }


  DeleteRoom(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This room will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._admin.DeleteRoom(id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted Successfully',
              showConfirmButton: false,
              timer: 1500
            });
            this.GetAllRooms();
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              title: 'Failed to delete',
              text: 'Something went wrong. Try again later.'
            });
          }
        });
      }
    });
  }


}

