import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-category',
  standalone: false,
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.css'
})
export class AllCategoryComponent {

  constructor(private _admin: AdminService) { }

  ngOnInit() {
    this.GetAllRoomsCategories();
  }

  RoomCategoriesContainer: any

  GetAllRoomsCategories() {
    this._admin.GetAllRoomsCategories().subscribe((data: any) => {
      this.RoomCategoriesContainer = data;
    });


  }




  DeleteCategory(id: any) {
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
        this._admin.DeleteRoomCategory(id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Deleted Successfully',
              showConfirmButton: false,
              timer: 1500
            });
            this.GetAllRoomsCategories();
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
