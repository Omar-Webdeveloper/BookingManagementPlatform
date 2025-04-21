import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private _admin: AdminService, private router: Router) { }

  Category: any = {};
  
  AddCategory(Category: any) {

    const formData = new FormData();
    formData.append("CategoryName", Category.CategoryName?.toString() ?? '');
    formData.append("Image", Category.Image?.toString() ?? '');
    formData.append("Description", Category.Description?.toString() ?? '');

    this._admin.AddRoomCategory(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Room Category Added',
          text: 'The room category has been added successfully!',
          timer: 1500,
          showConfirmButton: false
        });
        this.router.navigate(['/AdminDashBoard/AllCategories']);
      },
      error: (err) => {
        console.error("Server error:", err.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: err?.error?.title || 'Something went wrong while adding the Category.',



        });
      }



    });

  }





}
