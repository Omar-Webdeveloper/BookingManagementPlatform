import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../Services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  standalone: false,
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {


  constructor(private _admin: AdminService, private _Route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.CategoryId = this._Route.snapshot.paramMap.get('id');

    this._admin.GetRoomCategoryByID(this.CategoryId).subscribe((data: any) => {
      this.Category = data;
    });


  }



  Category: any

  CategoryId: any

  EditCategory(Category: any) {
    const formData = new FormData();
    formData.append("CategoryName", Category.CategoryName?.toString() ?? '');
    formData.append("Image", Category.Image?.toString() ?? '');
    formData.append("Description", Category.Description?.toString() ?? '');
    this._admin.editRoomCategory(this.CategoryId, formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Room Category Updated',
          text: 'The room category has been updated successfully!',
          timer: 1500,
          showConfirmButton: false
        });
        this.router.navigate(['/AllCategories']);
      },
      error: (err) => {
        console.error("Server error:", err.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: err?.error?.title || 'Something went wrong while updating the Category.',



        });
      }



    });







  }

}
